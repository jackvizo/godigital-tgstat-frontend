import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { useQuery } from "@apollo/client";
import { DashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";

export const TOTAL_SUBSCRIBERS_QUERY = graphql(`
  query TotalParticipants($tg_channel_ids: [bigint!]) {
    stat_channel(where: { tg_channel_id: { _in: $tg_channel_ids } }) {
      total_participants
    }
  }
`);

export interface UseTotalSubscribersWidgetLogicProps extends DashboardFilters {}

export function useTotalSubscribersWidgetLogic(props: UseTotalSubscribersWidgetLogicProps) {
  const auth = useAuth();
  const totalSubscribersQuery = useQuery(TOTAL_SUBSCRIBERS_QUERY, {
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1,
    variables: {
      tg_channel_ids: props.tgChannelIds,
    },
  });

  return {
    totalSubscribersQuery,
    totalSubscribersAmount: totalSubscribersQuery?.data?.stat_channel?.[0]?.total_participants ?? 0,
  };
}
