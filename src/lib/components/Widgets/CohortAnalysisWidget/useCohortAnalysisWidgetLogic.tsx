import { DocumentType, graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

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

export interface UseCohortAnalysisWidgetLogicProps extends DashboardFilters {
}

export type CohortData = DocumentType<typeof COHORT_ANALYSIS_QUERY>['cohort_analysis'];

const formatDate = (date: string) => dayjs(date).format('DD.MM.YYYY');

export const getLeftCount = (data: CohortData, joinDate: string, leftDate: string) => {
  const cohort = data.find(item => formatDate(item.join_date) === joinDate && formatDate(item.left_date) === leftDate);
  return cohort ? cohort.left_count : null;
};

export const getPercentage = (data: CohortData, joinDate: string, leftDate: string) => {
  const cohort = data.find(item => formatDate(item.join_date) === joinDate && formatDate(item.left_date) === leftDate);
  return cohort ? ((cohort.left_count / cohort.joined_count) * 100).toFixed(2) + '%' : null;
};

export function useCohortAnalysisWidgetLogic(props: UseCohortAnalysisWidgetLogicProps) {
  const auth = useAuth();
  const cohortAnalysisQuery = useQuery(COHORT_ANALYSIS_QUERY, {
    skip: !auth.session?.data?.accessToken,
    variables: {
      end_date: props.endDate,
      start_date: props.startDate,
      tg_channel_ids: `{${props.tgChannelIds.join(',')}}`
    },
  });

  const data = cohortAnalysisQuery?.data?.cohort_analysis ?? [];

  const joinDates = [...Array.from(new Set(data.map(item => formatDate(item.join_date))))];
  const leftDates = [...Array.from(new Set(data.map(item => formatDate(item.left_date))))];

  return {
    cohortAnalysisQuery,
    data: cohortAnalysisQuery?.data?.cohort_analysis ?? [],
    joinDates,
    leftDates
  };
}
