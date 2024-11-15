// useUnsubscribesByAdCompanyWidgetLogic.tsx

import { DocumentType, graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useAuth } from '@/lib/auth/use-auth';
import { InviteLinkGroups } from '@/lib/components/InviteLinkPicker/useInviteLinkPickerLogic';

export const UNSUBSCRIBES_BY_AD_COMPANY = graphql(`
 query UnsubscribesByLinks(
  $end_date: timestamp!
  $link_array: _text!
  $start_date: timestamp!
  $tg_channel_ids: _int8!
) {
  unsubscribes_by_links_in_strict_period(
    args: { end_date: $end_date, link_array: $link_array, start_date: $start_date, tg_channel_ids: $tg_channel_ids }
  ) {
    invite_link
    joined_count
    left_count
  }
}
`);

export type UnsubscribesByAdCompany = Omit<DocumentType<typeof UNSUBSCRIBES_BY_AD_COMPANY>['unsubscribes_by_links_in_strict_period'][number], '__typename'>

export interface UseUnsubscribesByAdCompanyWidgetLogicProps extends DashboardFilters {
  groups: InviteLinkGroups
}

export function useUnsubscribesByAdCompanyWidgetLogic(props: UseUnsubscribesByAdCompanyWidgetLogicProps) {
  const auth = useAuth();

  const unsubscribesByAdCompanyQuery = useQuery(UNSUBSCRIBES_BY_AD_COMPANY, {
    skip: !auth?.session?.data?.accessToken || props.tgChannelIds.length < 1 || !props.utcEndDatetime || !props.utcStartDatetime,
    variables: {
      end_date: props.utcEndDatetime,
      start_date: props.utcStartDatetime,
      tg_channel_ids: `{${props.tgChannelIds.join(',')}}`,
      link_array: `{${(props.checkedTgInviteLinks.length < 1 ? props.allTgInviteLinks : props.checkedTgInviteLinks).join(',')}}`
    },
  });

  const list = props.groups.map(group => ({
    ...group,
    items: group.items.map(item => {
      const unsubscribeData = unsubscribesByAdCompanyQuery?.data?.unsubscribes_by_links_in_strict_period.find(
        u => u.invite_link?.substring(0, 22) === item.link?.substring(0, 22)
      );
      return {
        ...item,
        joined_count: unsubscribeData?.joined_count || 0,
        left_count: unsubscribeData?.left_count || 0
      };
    })
  }));

  return {
    unsubscribesByAdCompanyQuery,
    list
  };
}
