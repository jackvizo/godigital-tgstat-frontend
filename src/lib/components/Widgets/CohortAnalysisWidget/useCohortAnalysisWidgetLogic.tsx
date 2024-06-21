import { graphql } from '@/generated/gql';
import { useQuery } from '@apollo/client';
import moment from 'moment';

const COHORT_ANALYSIS_QUERY = graphql(`
  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_ids: _int8!) {
    cohort_analysis(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids }) {
      join_date
      left_date
      joined_count
      left_count
    }
  }
`);

export interface UseCohortAnalysisWidgetLogicProps {
  tgChannelIds: number[];
  fromDate: Date;
  toDate: Date;
}

export function useCohortAnalysisWidgetLogic({ tgChannelIds, fromDate, toDate }: UseCohortAnalysisWidgetLogicProps) {
  const { loading, error, data } = useQuery(COHORT_ANALYSIS_QUERY, {
    variables: {
      end_date: moment(toDate).format('YYYY-MM-DD'),
      start_date: moment(fromDate).format('YYYY-MM-DD'),
      tg_channel_ids: `{${tgChannelIds.join(',')}}`
    },
  });

  return {
    loading,
    error,
    data: data ? data.cohort_analysis : [],
  };
}
