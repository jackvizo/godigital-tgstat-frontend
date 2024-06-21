'use client'

import { useAuth } from "@/lib/auth/use-auth";
import { DashboardFilters } from "@/lib/components/DashboardFilters/DashboardFilters";
import { useDashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFilters";
import { AvgERWidget } from "@/lib/components/Widgets/AvgERWidget/AvgERWidget";
import { AvgUserLifecycleWidget } from "@/lib/components/Widgets/AvgUserLifecycleWidget/AvgUserLifecycleWidget";
import { CohortAnalysisWidget } from "@/lib/components/Widgets/CohortAnalysisWidget/CohortAnalysisWidget";
import { ER24Widget } from "@/lib/components/Widgets/ER24Widget/ER24Widget";
import { SignupsBySourceWidget } from "@/lib/components/Widgets/SignupsBySourceWidget/SignupsBySourceWidget";
import { SignupsUnsubscribesChart } from "@/lib/components/Widgets/SignupsUnsubscribesChart/SignupsUnsubscribesChart";
import { SignupsWidget } from "@/lib/components/Widgets/SignupsWidget/SignupsWidget";
import { useSignupsWidgetLogic } from "@/lib/components/Widgets/SignupsWidget/useSignupsWidgetLogic";
import { TotalSubscribersWidget } from "@/lib/components/Widgets/TotalSubscribersWidget/TotalSubscribersWidget";
import { UnsubscribesBySourceWidget } from "@/lib/components/Widgets/UnsubscribesBySourceWidget/UnsubscribesBySourceWidget";
import { UnsubscribesWidget } from "@/lib/components/Widgets/UnsubscribesWidget/UnsubscribesWidget";
import { Box } from '@mui/material';

export interface ClientContainerProps { };

export function ClientContainer(props: ClientContainerProps) {
  const dashboardFiltersLogic = useDashboardFilters();
  const { tgChannelIds, startDate, endDate, timePeriod } = dashboardFiltersLogic;

  const auth = useAuth();

  const signupsDataLogic = useSignupsWidgetLogic({ tgChannelIds, fromDate: startDate!.toDate(), toDate: endDate!.toDate(), timePeriod });

  if (
    !auth.session?.data?.accessToken
  ) return <p>Loading...</p>;

  return (
    <Box>
      <DashboardFilters {...dashboardFiltersLogic} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2 }}>
        <TotalSubscribersWidget tgChannelIds={tgChannelIds} />
        <AvgUserLifecycleWidget tgChannelIds={tgChannelIds} />
        <ER24Widget tgChannelIds={tgChannelIds} date={startDate!.toDate()} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2 }}>
        <SignupsWidget signupsData={signupsDataLogic.data} />
        <UnsubscribesWidget tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} />
        {/* <UnsubscriptionRateWidget tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} /> */}
        <AvgERWidget tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2 }}>
        <SignupsUnsubscribesChart tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} timePeriod={timePeriod} />
        <SignupsBySourceWidget tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} />
        <UnsubscribesBySourceWidget tgChannelIds={tgChannelIds} fromDate={startDate!.toDate()} toDate={endDate!.toDate()} />
      </Box>
    </Box>
  )
}
