// src/lib/components/Widgets/UnsubscribesByInviteLinksWidget/useUnsubscribesByInviteLinksWidgetLogic.tsx
import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useAuth } from '@/lib/auth/use-auth';

const UNSUBSCRIBES_BY_INVITE_LINKS_QUERY = graphql(`
  query UnsubscribesUsersByLinksAggregates($tg_channel_ids: [bigint!], $start_date: timestamp!, $end_date: timestamp!) {
    without_link: stat_user_aggregate(
      where: {
        tg_channel_id: { _in: $tg_channel_ids }
        left_at: { _gte: $start_date, _lte: $end_date }
        _or: [{ is_joined_by_link: { _eq: false } }, { is_joined_by_link: { _is_null: true } }]
      }
    ) {
      aggregate {
        count
      }
    }
    with_link: stat_user_aggregate(
      where: {
        tg_channel_id: { _in: $tg_channel_ids }
        left_at: { _gte: $start_date, _lte: $end_date }
        is_joined_by_link: { _eq: true }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`);

export interface UseUnsubscribesByInviteLinksWidgetLogicProps extends DashboardFilters {
}

export function useUnsubscribesByInviteLinksWidgetLogic(props: UseUnsubscribesByInviteLinksWidgetLogicProps) {
  const auth = useAuth();

  const unsubscribesByInviteLinksQuery = useQuery(UNSUBSCRIBES_BY_INVITE_LINKS_QUERY, {
    skip: !auth?.session?.data?.accessToken,
    variables: {
      end_date: props.endDate,
      start_date: props.startDate,
      tg_channel_ids: props.tgChannelIds
    },
  });

  const withLinkCount = unsubscribesByInviteLinksQuery?.data?.with_link?.aggregate?.count ?? 0
  const withoutLinkCount = unsubscribesByInviteLinksQuery?.data?.without_link?.aggregate?.count ?? 0
  const total = withLinkCount + withoutLinkCount;
  const withLinkPercent = (total > 0 ? withLinkCount / total : 0) * 100
  const withoutLinkPercent = (total > 0 ? withoutLinkCount / total : 0) * 100

  return {
    unsubscribesByInviteLinksQuery,
    withLinkCount,
    withoutLinkCount,
    withLinkPercent,
    withoutLinkPercent
  };
}
