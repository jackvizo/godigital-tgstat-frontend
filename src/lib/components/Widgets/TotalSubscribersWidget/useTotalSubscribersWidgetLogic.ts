import { useAuth } from "@/lib/auth/use-auth";
import { DashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";
import { gql, useQuery } from "@apollo/client";

export interface UseTotalSubscribersWidgetLogicProps extends DashboardFilters {}

type TOTAL_SUBSCRIBERS_QUERY_RES = Record<string, { total_participants: number }[]>;

export function useTotalSubscribersWidgetLogic(props: UseTotalSubscribersWidgetLogicProps) {
  const auth = useAuth();
  const TOTAL_SUBSCRIBERS_QUERY = gql(
    props.tgChannelIds.length < 1
      ? `
  query Dummy {
    stat_channel(limit: 0) {pk}
  }
  `
      : `
  query TotalParticipants {
    ${props.tgChannelIds
      .map(
        (tgChannelId) => `id${tgChannelId}: stat_channel(
          where: {
            tg_channel_id: { _eq: ${tgChannelId} }
          },
          limit: 1,
          order_by: { pk: desc }
          ) {
            total_participants
          }`
      )
      .join(" ")}
  }
`
  );
  const totalSubscribersQuery = useQuery<TOTAL_SUBSCRIBERS_QUERY_RES>(TOTAL_SUBSCRIBERS_QUERY, {
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1,
    variables: {
      tg_channel_ids: props.tgChannelIds,
    },
  });

  let totalSubscribersAmount = 0;

  Object.values((totalSubscribersQuery?.data ?? {}) as TOTAL_SUBSCRIBERS_QUERY_RES).map((entry) => {
    totalSubscribersAmount += entry?.[0]?.total_participants ?? 0;
  });

  return {
    totalSubscribersQuery,
    totalSubscribersAmount,
  };
}
