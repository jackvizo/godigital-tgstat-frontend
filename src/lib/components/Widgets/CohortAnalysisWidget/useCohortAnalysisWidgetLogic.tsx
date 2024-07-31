import { graphql } from '@/generated/gql';
import { useAuth } from '@/lib/auth/use-auth';
import { DashboardFilters } from '@/lib/components/DashboardFilters/useDashboardFiltersLogic';
import { useQuery } from '@apollo/client';
import { TimeUnit } from 'chart.js';
import dayjs from 'dayjs';

export const COHORT_ANALYSIS_QUERY = graphql(`
  query CohortAnalysis($end_date: date!, $start_date: date!, $tg_channel_ids: _int8!, $time_bucket: String!) {
    cohort_analysis(args: { start_date: $start_date, end_date: $end_date, tg_channel_ids: $tg_channel_ids, time_bucket: $time_bucket }) {
      join_date
      left_date
      joined_count
      left_count
    }
  }
`);

export interface UseCohortAnalysisWidgetLogicProps extends DashboardFilters {
}

export type MatrixEntryType = {
  join_date?: string;
  left_date?: string;
  joined_count?: number;
  left_count?: number;
};

const formatDate = (date: string | Date | dayjs.Dayjs | undefined) => dayjs(date).format('DD.MM.YYYY');

const formatMonth = (date: string | Date | dayjs.Dayjs | undefined) => dayjs(date).format('MMM YYYY');

function getDatesArray(utcStartDate: string | undefined, utcEndDate: string | undefined, timePeriod: TimeUnit | undefined): string[] {
  const dates = [];
  let currentDate = dayjs(utcStartDate);
  const lastDate = dayjs(utcEndDate);

  while (currentDate.isBefore(lastDate)) {
    if (timePeriod === 'year') {
      dates.push(currentDate.format('YYYY-MM'));
      currentDate = currentDate.add(1, 'month');
    } else {
      dates.push(currentDate.format('YYYY-MM-DD'));
      currentDate = currentDate.add(1, 'day');
    }
  }

  return dates;
}

function flatCohortToMatrix(cohort: MatrixEntryType[], dates: string[], timePeriod: TimeUnit | undefined): MatrixEntryType[][] {
  if (!timePeriod) {
    return [];
  }

  const matrix: MatrixEntryType[][] = [];

  dates.forEach(joinDate => {
    const row = dates.map(leftDate => {
      const entry = cohort.find(item => {
        if (timePeriod === 'year') {
          return item.join_date?.startsWith(joinDate) && item.left_date?.startsWith(leftDate);
        } else {
          return item.join_date === joinDate && item.left_date === leftDate;
        }
      });
      return entry || { join_date: joinDate, left_date: leftDate, joined_count: 0, left_count: 0 };
    });
    matrix.push(row);
  });

  return matrix;
}

const getPercentage = (joinedCount: number, leftCount: number) => {
  return joinedCount ? ((leftCount / joinedCount) * 100).toFixed(2) + '%' : '0%';
};

const getHeat = (leftCount: number, maxLeftCount: number) => {
  if (leftCount === 0) return 0;
  const intensity = Math.min(1, leftCount / maxLeftCount);
  return intensity;
};

export function useCohortAnalysisWidgetLogic(props: UseCohortAnalysisWidgetLogicProps) {
  const auth = useAuth();
  const timeBucket = props.timePeriod === 'year' ? 'month' : 'day';


  const cohortAnalysisQuery = useQuery(COHORT_ANALYSIS_QUERY, {
    skip: !auth.session?.data?.accessToken || props.tgChannelIds.length < 1 || !props.utcEndDate || !props.utcStartDate,
    variables: {
      end_date: props.utcEndDate,
      start_date: props.utcStartDate,
      tg_channel_ids: `{${props.tgChannelIds.join(',')}}`,
      time_bucket: timeBucket
    },
  });

  const data = cohortAnalysisQuery?.data?.cohort_analysis ?? [];
  const dates = getDatesArray(props?.utcStartDate, props?.utcEndDate, props?.timePeriod);

  const maxLeftCount = Math.max(...data.map(cell => cell.left_count ?? 0));

  const matrixData = flatCohortToMatrix(data, dates, props?.timePeriod);

  const formattedMatrixData = matrixData.map(row =>
    row.map(cell => ({
      ...cell,
      formattedJoinDate: props.timePeriod === 'year' ? formatMonth(cell.join_date!) : formatDate(cell.join_date!),
      formattedLeftDate: props.timePeriod === 'year' ? formatMonth(cell.left_date!) : formatDate(cell.left_date!),
      percentage: getPercentage(cell.joined_count!, cell.left_count!),
      heat: getHeat(cell.left_count!, maxLeftCount)
    }))
  );

  const formattedDates = props.timePeriod === 'year'
    ? dates.map(date => formatMonth(date))
    : dates.map(date => formatDate(date));

  return {
    cohortAnalysisQuery,
    formattedMatrixData,
    dates: formattedDates
  };
}
