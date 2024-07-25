'use client'

import { DashboardDatePicker } from "@/lib/components/DashboardDatePicker/DashboardDatePicker";
import { useDashboardDatePicker } from "@/lib/components/DashboardDatePicker/useDashboardDatePicker";
import { DashboardFilters } from "@/lib/components/DashboardFilters/DashboardFilters";
import { useDashboardFiltersLogic } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";
import { WidgetWrapper } from "@/lib/components/WidgetWrapper/WidgetWrapper";
import { AvgERWidget } from "@/lib/components/Widgets/AvgERWidget/AvgERWidget";
import { useAvgERWidgetLogic } from "@/lib/components/Widgets/AvgERWidget/useAvgERWidgetLogic";
import { AvgUserLifecycleWidget } from "@/lib/components/Widgets/AvgUserLifecycleWidget/AvgUserLifecycleWidget";
import { useAvgUserLifecycleWidgetLogic } from "@/lib/components/Widgets/AvgUserLifecycleWidget/useAvgUserLifecycleWidgetLogic";
import { CohortAnalysisWidget } from "@/lib/components/Widgets/CohortAnalysisWidget/CohortAnalysisWidget";
import { useCohortAnalysisWidgetLogic } from "@/lib/components/Widgets/CohortAnalysisWidget/useCohortAnalysisWidgetLogic";
import { ER24Widget } from "@/lib/components/Widgets/ER24Widget/ER24Widget";
import { useER24WidgetLogic } from "@/lib/components/Widgets/ER24Widget/useER24WidgetLogic";
import { NetSubscribesChart } from "@/lib/components/Widgets/NetSubscribesChartWidget/NetSubscribesChart";
import { useNetSubscribesChartWidgetLogic } from "@/lib/components/Widgets/NetSubscribesChartWidget/useNetSubscribesChartWidgetLogic";
import { SubscribersAmountByDateRangeWidget } from "@/lib/components/Widgets/SubscribersAmountByDateRange/SubscribersAmountByDateRangeWidget";
import { useSubscribersAmountByDateRangeWidgetLogic } from "@/lib/components/Widgets/SubscribersAmountByDateRange/useSubscribersAmountByDateRangeWidgetLogic";
import { SubscribesByInviteLinksWidget } from "@/lib/components/Widgets/SubscribesByInviteLinksWidget/SubscribesByInviteLinksWidget";
import { useSubscribesByInviteLinksWidgetLogic } from "@/lib/components/Widgets/SubscribesByInviteLinksWidget/useSubscribesByInviteLinksWidgetLogic";
import { SubscribesUnsubscribesChart } from "@/lib/components/Widgets/SubscribesUnsubscribesChart/SubscribesUnsubscribesChart";
import { useSubscribesUnsubscribesChartWidgetLogic } from "@/lib/components/Widgets/SubscribesUnsubscribesChart/useSubscribesUnsubscribesChartWidgetLogic";
import { TotalSubscribersWidget } from "@/lib/components/Widgets/TotalSubscribersWidget/TotalSubscribersWidget";
import { useTotalSubscribersWidgetLogic } from "@/lib/components/Widgets/TotalSubscribersWidget/useTotalSubscribersWidgetLogic";
import { UnsubscribersAmountByDateRangeWidget } from "@/lib/components/Widgets/UnsubscribersAmountByDateRange/UnsubscribersAmountByDateRangeWidget";
import { useUnsubscribersAmountWidgetLogic } from "@/lib/components/Widgets/UnsubscribersAmountByDateRange/useUnsubscribersAmountByDateRangeWidgetLogic";
import { UnsubscribersPercentByDateRangeWidget } from "@/lib/components/Widgets/UnsubscribersPercentByDateRange/UnsubscribersPercentByDateRangeWidget";
import { useUnsubscribersPercentWidgetLogic } from "@/lib/components/Widgets/UnsubscribersPercentByDateRange/useUnsubscribersPercenttByDateRangeWidgetLogic";
import { UnsubscribesByAdCompanyWidget } from "@/lib/components/Widgets/UnsubscribesByAdCompany/UnsubscribesByAdCompanyWidget";
import { useUnsubscribesByAdCompanyWidgetLogic } from "@/lib/components/Widgets/UnsubscribesByAdCompany/useUnsubscribesByAdCompanyWidgetLogic";
import { UnsubscribesByInviteLinksWidget } from "@/lib/components/Widgets/UnsubscribesByInviteLinksWidget/UnsubscribesByInviteLinksWidget";
import { useUnsubscribesByInviteLinksWidgetLogic } from "@/lib/components/Widgets/UnsubscribesByInviteLinksWidget/useUnsubscribesByInviteLinksWidgetLogic";
import { UnsubscribesByPeriodWidget } from "@/lib/components/Widgets/UnsubscribesByPeriodWidget/UnsubscribesByPeriodWidget";
import { useUnsubscribesByPeriodWidgetLogic } from "@/lib/components/Widgets/UnsubscribesByPeriodWidget/useUnsubscribesByPeriodWidgetLogic";
import { UnsubscribesPieWidget } from "@/lib/components/Widgets/UnsubscribesPieWidget/UnsubscribesPieWidget";
import { useUnsubscribesPieWidgetLogic } from "@/lib/components/Widgets/UnsubscribesPieWidget/useUnsubscribesPieWidgetLogic";
import { Box, Divider, Typography } from '@mui/material';
import React from "react";

export interface ClientContainerProps { };

const Row: React.FC<React.PropsWithChildren> = (props) => <Box sx={{ display: 'flex', flexWrap: 'wrap', my: 2, gap: 2 }}>{props.children}</Box>


interface CohortWidgetProps {
  dashboardFiltersLogic: ReturnType<typeof useDashboardFiltersLogic>;
}

function CohortWidget(props: CohortWidgetProps) {
  const cohortAnalysisDatePicker = useDashboardDatePicker({
    startDate: props.dashboardFiltersLogic.filters.startDate,
    initialPeriod: "week",
  });
  const cohortAnalysisLogic = useCohortAnalysisWidgetLogic({
    ...props.dashboardFiltersLogic.filters,
    startDate: cohortAnalysisDatePicker.startDateState,
    endDate: cohortAnalysisDatePicker.endDateState,
    timePeriod: cohortAnalysisDatePicker.timePeriod!,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", my: 2, gap: 2, maxHeight: 600 }}>
      <Typography variant="subtitle2" gutterBottom>
        Когорта отписок
      </Typography>
      <DashboardDatePicker
        {...cohortAnalysisDatePicker}
        periods={["week", "month", "year"]}
        displayDatePickers={false}
      />
      <WidgetWrapper query={cohortAnalysisLogic.cohortAnalysisQuery} loading={props.dashboardFiltersLogic.isTgChannelsInitiallyLoading} height={469} width="100%">
        <CohortAnalysisWidget {...cohortAnalysisLogic} />
      </WidgetWrapper>
    </Box>
  );
}

const rowHeight1 = 70;
const rowHeight2 = 372;

export function ClientContainer(props: ClientContainerProps) {
  const dashboardFiltersLogic = useDashboardFiltersLogic();

  const totalSubscribersWidgetLogic = useTotalSubscribersWidgetLogic(dashboardFiltersLogic.filters)
  const avgUserLifecycleWidgetLogic = useAvgUserLifecycleWidgetLogic(dashboardFiltersLogic.filters)
  const er24WidgetLogic = useER24WidgetLogic(dashboardFiltersLogic.filters);

  const subscribersAmountWidgetLogic = useSubscribersAmountByDateRangeWidgetLogic(dashboardFiltersLogic.filters)
  const unsubscribersAmountWidgetLogic = useUnsubscribersAmountWidgetLogic(dashboardFiltersLogic.filters)
  const avgErLogic = useAvgERWidgetLogic(dashboardFiltersLogic.filters)

  const unsubscribersPercentWidgetLogic = useUnsubscribersPercentWidgetLogic({ subscribersAmountWidgetLogic, unsubscribersAmountWidgetLogic })
  const subscribesUnsubscribesChartWidgetLogic = useSubscribesUnsubscribesChartWidgetLogic(dashboardFiltersLogic.filters)
  const netSubscribesChartWidgetLogic = useNetSubscribesChartWidgetLogic({ ...dashboardFiltersLogic.filters, subscribesUnsubscribesChartWidgetLogic })

  const subscribesByInviteLinksWidgetLogic = useSubscribesByInviteLinksWidgetLogic(dashboardFiltersLogic.filters)
  const unsubscribesByInviteLinksWidgetLogic = useUnsubscribesByInviteLinksWidgetLogic(dashboardFiltersLogic.filters)
  const unsubscribesByPeriodWidgetLogic = useUnsubscribesByPeriodWidgetLogic(dashboardFiltersLogic.filters);
  const unsubscribesByAdCompany = useUnsubscribesByAdCompanyWidgetLogic({ ...dashboardFiltersLogic.filters, groups: dashboardFiltersLogic.inviteLinkPickerLogic.groups })

  const unsubscribesPieWidgetLogic = useUnsubscribesPieWidgetLogic(dashboardFiltersLogic.filters);
  const initiallyLoading = dashboardFiltersLogic.isTgChannelsInitiallyLoading

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <DashboardFilters dashboardFiltersLogic={dashboardFiltersLogic} />
      </Box>

      {dashboardFiltersLogic.isNoTrackedChannels ? (
        <Typography variant="subtitle1" gutterBottom>Выберите каналы для отслеживания через кнопку "Каналы"</Typography>
      ) : (
        <>
          <Typography variant="subtitle1" gutterBottom>За всё время</Typography>
          <Divider />

          <Row>
            <WidgetWrapper query={totalSubscribersWidgetLogic.totalSubscribersQuery} loading={initiallyLoading} height={rowHeight1} width={167}>
              <TotalSubscribersWidget {...totalSubscribersWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper query={avgUserLifecycleWidgetLogic.avgUserLifecycleQuery} loading={initiallyLoading} height={rowHeight1} width={200}>
              <AvgUserLifecycleWidget {...avgUserLifecycleWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper query={er24WidgetLogic.er24Query} loading={initiallyLoading} height={rowHeight1} width={70}>
              <ER24Widget {...er24WidgetLogic} />
            </WidgetWrapper>
          </Row>

          <Typography variant="subtitle1" gutterBottom>За выбранный период</Typography>
          <Divider />

          <Row>
            <WidgetWrapper query={subscribersAmountWidgetLogic.subscribersAmountByDateRangeQuery} loading={initiallyLoading} height={rowHeight1} width={125}>
              <SubscribersAmountByDateRangeWidget {...subscribersAmountWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper query={unsubscribersAmountWidgetLogic.unsubscribersAmountByDateRangeQuery} loading={initiallyLoading} height={rowHeight1} width={115}>
              <UnsubscribersAmountByDateRangeWidget {...unsubscribersAmountWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper queries={[subscribersAmountWidgetLogic.subscribersAmountByDateRangeQuery, unsubscribersAmountWidgetLogic.unsubscribersAmountByDateRangeQuery]} loading={initiallyLoading} height={rowHeight1} width={109}>
              <UnsubscribersPercentByDateRangeWidget {...unsubscribersPercentWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper query={avgErLogic.avgErQuery} loading={initiallyLoading} height={rowHeight1} width={112}>
              <AvgERWidget {...avgErLogic} />
            </WidgetWrapper>
          </Row>

          <Row>
            <WidgetWrapper queries={[subscribesUnsubscribesChartWidgetLogic.subscribesQuery, subscribesUnsubscribesChartWidgetLogic.unsubscribesQuery]} loading={initiallyLoading} height={rowHeight2} width={500}>
              <SubscribesUnsubscribesChart {...subscribesUnsubscribesChartWidgetLogic} title="Подписки и отписки" />
            </WidgetWrapper>
            <WidgetWrapper queries={[subscribesUnsubscribesChartWidgetLogic.subscribesQuery, subscribesUnsubscribesChartWidgetLogic.unsubscribesQuery]} loading={initiallyLoading} height={rowHeight2} width={500}>
              <NetSubscribesChart {...netSubscribesChartWidgetLogic} />
            </WidgetWrapper>

            <WidgetWrapper query={subscribesByInviteLinksWidgetLogic.subscribesByInviteLinksQuery} loading={initiallyLoading} height={rowHeight2} width={332}>
              <SubscribesByInviteLinksWidget {...subscribesByInviteLinksWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper query={unsubscribesByInviteLinksWidgetLogic.unsubscribesByInviteLinksQuery} loading={initiallyLoading} height={rowHeight2} width={332}>
              <UnsubscribesByInviteLinksWidget {...unsubscribesByInviteLinksWidgetLogic} />
            </WidgetWrapper>
            <WidgetWrapper
              query={unsubscribesPieWidgetLogic.subscribesUnsubscribesPieAggregatesQuery}
              loading={initiallyLoading}
              height={rowHeight2}
              width={332}
            >
              <UnsubscribesPieWidget {...unsubscribesPieWidgetLogic} />
            </WidgetWrapper>
          </Row>
          <Row>
            <WidgetWrapper query={unsubscribesByPeriodWidgetLogic.unsubscribesByPeriodsQuery} height={686} width={400}>
              <Box sx={{ maxWidth: 600 }}>
                <UnsubscribesByPeriodWidget {...unsubscribesByPeriodWidgetLogic} />
              </Box>
            </WidgetWrapper>
            <WidgetWrapper query={unsubscribesByAdCompany.unsubscribesByAdCompanyQuery} height={686} width={400}>
              <UnsubscribesByAdCompanyWidget {...unsubscribesByAdCompany} />
            </WidgetWrapper>
          </Row>

          <Divider />

          <CohortWidget dashboardFiltersLogic={dashboardFiltersLogic} />
        </>
      )}

    </Box>
  )
}
