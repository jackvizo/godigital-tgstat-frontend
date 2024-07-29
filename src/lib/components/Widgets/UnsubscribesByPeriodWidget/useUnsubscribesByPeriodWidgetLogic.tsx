import { graphql } from "@/generated/gql";
import { useQuery } from "@apollo/client";
import { DashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";
import { useAuth } from "@/lib/auth/use-auth";

export const UNSUBSCRIBES_BY_PERIODS_QUERY = graphql(`
  query UnsubscribesByPeriods($start_date: timestamp!, $end_date: timestamp!, $tg_channel_ids: _int8!) {
    unsubscribes_by_periods(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {
      interval_label
      count
      percentage
    }
  }
`);

export interface UseUnsubscribesByPeriodWidgetLogicProps extends DashboardFilters { }

const intervalLabels: Record<string, string> = {
  "0_TO_1_MIN": "0 минут - 1 минута",
  "1_MIN_TO_1_HOUR": "1 минута - 1 час",
  "1_HOUR_TO_1_DAY": "1 час - 1 день",
  "1_DAY_TO_3_DAYS": "1 день - 3 дня",
  "3_DAYS_TO_7_DAYS": "3 дня - 7 дней",
  "1_WEEK_TO_2_WEEKS": "1 неделя - 2 недели",
  "2_WEEKS_TO_1_MONTH": "2 недели - 1 месяц",
  "1_MONTH_TO_2_MONTHS": "1 месяц - 2 месяца",
};

export function useUnsubscribesByPeriodWidgetLogic(props: UseUnsubscribesByPeriodWidgetLogicProps) {
  const auth = useAuth();
  const unsubscribesByPeriodsQuery = useQuery(UNSUBSCRIBES_BY_PERIODS_QUERY, {
    skip: !auth.session?.data?.accessToken || props.tgChannelIds.length < 1 || !props.utcEndDate || !props.utcStartDate,
    variables: {
      start_date: props.utcStartDate,
      end_date: props.utcEndDate,
      tg_channel_ids: `{${props.tgChannelIds.join(",")}}`,
    },
  });

  return {
    unsubscribesByPeriodsQuery,
    data: (unsubscribesByPeriodsQuery?.data?.unsubscribes_by_periods ?? [])?.map((item) => ({
      label: intervalLabels?.[item?.interval_label ?? ""] ?? item.interval_label ?? '',
      value: `${item.count || 0} (${item.percentage?.toFixed(2) || 0}%)`,
      percentage: item.percentage ?? 0,
    })),
  };
}
