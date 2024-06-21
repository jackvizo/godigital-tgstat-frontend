// hooks/useSignupsWidgetLogic.ts
import { graphql } from "@/generated/gql";
import { useAuth } from "@/lib/auth/use-auth";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";

const SIGNUPS_QUERY = graphql(`
  query SignupsByPeriod(
    $end_date: timestamp!
    $start_date: timestamp!
    $time_period: String!
    $tg_channel_ids: _int8!
  ) {
    user_signups_by_period(
      args: { end_date: $end_date, start_date: $start_date, time_period: $time_period, tg_channel_ids: $tg_channel_ids }
    ) {
      count
      time_bucket
    }
  }
`);

export interface UseSignupsWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date | undefined;
  toDate: Date | undefined;
  timePeriod: string;
}

export function useSignupsWidgetLogic({ tgChannelIds, fromDate, toDate, timePeriod }: UseSignupsWidgetLogicProps) {
  const auth = useAuth();
  const { loading, error, data } = useQuery(SIGNUPS_QUERY, {
    skip: !auth.session?.data?.accessToken,
    variables: {
      end_date: dayjs(toDate).format("YYYY-MM-DDTHH:mm:ssZ"),
      start_date: dayjs(fromDate).format("YYYY-MM-DDTHH:mm:ssZ"),
      time_period: timePeriod,
      tg_channel_ids: `{${tgChannelIds.join(",")}}`,
    },
  });

  return {
    loading,
    error,
    data: data ? data.user_signups_by_period : null,
  };
}
