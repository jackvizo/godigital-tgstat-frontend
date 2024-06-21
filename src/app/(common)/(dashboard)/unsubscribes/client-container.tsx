'use client'

import { useAuth } from "@/lib/auth/use-auth";
import { DashboardFilters } from "@/lib/components/DashboardFilters/DashboardFilters";
import { useDashboardFilters } from "@/lib/components/DashboardFilters/useDashboardFilters";
import { CohortAnalysisWidget } from "@/lib/components/Widgets/CohortAnalysisWidget/CohortAnalysisWidget";
import { SignupsUnsubscribesChart } from "@/lib/components/Widgets/SignupsUnsubscribesChart/SignupsUnsubscribesChart";
import { UnsubscribesByPeriodWidget } from "@/lib/components/Widgets/UnsubscribesByPeriodWidget/UnsubscribesByPeriodWidget";
import { UnsubscribesPieWidget } from "@/lib/components/Widgets/UnsubscribesPieWidget/UnsubscribesPieWidget";
import { Box } from '@mui/material';

export interface ClientContainerProps { };

export function ClientContainer(props: ClientContainerProps) {
  const dashboardFiltersLogic = useDashboardFilters();
  const cohortFiltersLogic = useDashboardFilters({ startDate: dashboardFiltersLogic.startDate, initialPeriod: 'week' });

  const signupsUnsubscribesChartStartDate = dashboardFiltersLogic.startDate?.clone?.();
  signupsUnsubscribesChartStartDate?.hours(0);
  signupsUnsubscribesChartStartDate?.minutes(0);
  signupsUnsubscribesChartStartDate?.seconds(0);
  const signupsUnsubscribesChartEndDate = signupsUnsubscribesChartStartDate?.clone?.();
  signupsUnsubscribesChartEndDate?.add(1, "day");

  const auth = useAuth();

  if (
    !auth.session?.data?.accessToken
  ) return <p>Loading...</p>;

  return (
    <Box>
      <DashboardFilters {...dashboardFiltersLogic} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2, mb: 2 }}>
        <SignupsUnsubscribesChart
          hideSubscribes
          tgChannelIds={dashboardFiltersLogic.tgChannelIds}
          fromDate={signupsUnsubscribesChartStartDate!.toDate()}
          toDate={signupsUnsubscribesChartEndDate!.toDate()}
          timePeriod={'hour'}
        />
        <UnsubscribesPieWidget
          tgChannelIds={dashboardFiltersLogic.tgChannelIds}
          fromDate={dashboardFiltersLogic.startDate!.toDate()}
          toDate={dashboardFiltersLogic.endDate!.toDate()}
        />
        <UnsubscribesByPeriodWidget
          tgChannelIds={dashboardFiltersLogic.tgChannelIds}
          fromDate={dashboardFiltersLogic.startDate!.toDate()}
          toDate={dashboardFiltersLogic.endDate!.toDate()}
        />
      </Box>
      <DashboardFilters {...cohortFiltersLogic} periods={['week', 'month', 'year']} isDatePickerHidden />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2 }}>
        <CohortAnalysisWidget
          tgChannelIds={cohortFiltersLogic.tgChannelIds}
          fromDate={cohortFiltersLogic.startDate!.toDate()}
          toDate={cohortFiltersLogic.endDate!.toDate()}
        />

      </Box>
    </Box>
  )
}
