import axios from "axios";

interface Deployment {
  id: string;
  [key: string]: any;
}

async function getDeploymentByFlowName(flowName: string): Promise<Deployment | null> {
  const response = await axios.post(`${process.env.PREFECT_URL}/api/deployments/filter`, {
    flows: {
      name: {
        any_: [flowName],
      },
    },
  });
  const json = response.data;
  return json[0] || null;
}

async function createScheduledFlowRun(deploymentId: string, phoneNumber: string, channelId: string) {
  const response = await axios.post(`${process.env.PREFECT_URL}/api/deployments/${deploymentId}/create_flow_run`, {
    parameters: {
      scheduled_phone_number: phoneNumber,
      scheduled_tg_channel_id: channelId,
    },
    state: {
      type: "SCHEDULED",
    },
  });
  return response;
}

async function runTgCollectFlowRun(args: { phoneNumber: string; channelId: string }) {
  const deployment = await getDeploymentByFlowName("flow-tg-collect-by-all-users");
  if (!deployment) {
    throw new Error("Deployment not found");
  }
  const deploymentId = deployment.id;

  await createScheduledFlowRun(deploymentId, args.phoneNumber, args.channelId);
}

export { createScheduledFlowRun, getDeploymentByFlowName, runTgCollectFlowRun };
