"use client";

import { DashboardDatePicker } from "@/lib/components/DashboardDatePicker/DashboardDatePicker";
import { useDashboardDatePicker } from "@/lib/components/DashboardDatePicker/useDashboardDatePicker";
import { DashboardFilters } from "@/lib/components/DashboardFilters/DashboardFilters";
import { useDashboardFiltersLogic } from "@/lib/components/DashboardFilters/useDashboardFiltersLogic";
import { WidgetWrapper } from "@/lib/components/WidgetWrapper/WidgetWrapper";
import { CohortAnalysisWidget } from "@/lib/components/Widgets/CohortAnalysisWidget/CohortAnalysisWidget";
import { useCohortAnalysisWidgetLogic } from "@/lib/components/Widgets/CohortAnalysisWidget/useCohortAnalysisWidgetLogic";
import { SubscribesUnsubscribesChart } from "@/lib/components/Widgets/SubscribesUnsubscribesChart/SubscribesUnsubscribesChart";
import { useSubscribesUnsubscribesChartWidgetLogic } from "@/lib/components/Widgets/SubscribesUnsubscribesChart/useSubscribesUnsubscribesChartWidgetLogic";
import { UnsubscribesByPeriodWidget } from "@/lib/components/Widgets/UnsubscribesByPeriodWidget/UnsubscribesByPeriodWidget";
import { useUnsubscribesByPeriodWidgetLogic } from "@/lib/components/Widgets/UnsubscribesByPeriodWidget/useUnsubscribesByPeriodWidgetLogic";
import { UnsubscribesPieWidget } from "@/lib/components/Widgets/UnsubscribesPieWidget/UnsubscribesPieWidget";
import { useUnsubscribesPieWidgetLogic } from "@/lib/components/Widgets/UnsubscribesPieWidget/useUnsubscribesPieWidgetLogic";
import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

export interface ClientContainerProps { }

const Row: React.FC<React.PropsWithChildren> = (props) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", my: 2, gap: 2 }}>{props.children}</Box>
);

const rowHeight2 = 372;

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
    ...cohortAnalysisDatePicker,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", my: 2, gap: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        Когорта отписок
      </Typography>
      <DashboardDatePicker
        {...cohortAnalysisDatePicker}
        periods={["week", "month", "year"]}
        displayDatePickers={false}
      />
      <WidgetWrapper query={cohortAnalysisLogic.cohortAnalysisQuery} height={rowHeight2} width={332}>
        <CohortAnalysisWidget {...cohortAnalysisLogic} />
      </WidgetWrapper>
    </Box>
  );
}

interface UnsubscribesChartProps {
  dashboardFiltersLogic: ReturnType<typeof useDashboardFiltersLogic>;
}

function UnsubscribesChart(props: UnsubscribesChartProps) {
  const [now] = useState(dayjs().set("minutes", 0).set("seconds", 0));
  const [nowSubtract24h] = useState(now.clone().subtract(24, "hours"));
  const subscribesUnsubscribesChartWidgetLogic = useSubscribesUnsubscribesChartWidgetLogic({
    ...props.dashboardFiltersLogic.filters,
    startDate: now.toDate(),
    endDate: nowSubtract24h.toDate(),
    displayedCharts: ["unsubscribes"],
  });

  return (
    <WidgetWrapper queries={[subscribesUnsubscribesChartWidgetLogic.unsubscribesQuery]} height={rowHeight2} width={500}>
      <SubscribesUnsubscribesChart {...subscribesUnsubscribesChartWidgetLogic} title="Отписки за последние 24 часа" />
    </WidgetWrapper>
  );
}

export function ClientContainer(props: ClientContainerProps) {
  const dashboardFiltersLogic = useDashboardFiltersLogic();

  const unsubscribesPieWidgetLogic = useUnsubscribesPieWidgetLogic(dashboardFiltersLogic.filters);
  const unsubscribesByPeriodWidgetLogic = useUnsubscribesByPeriodWidgetLogic(dashboardFiltersLogic.filters);

  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <DashboardFilters dashboardFiltersLogic={dashboardFiltersLogic} />
      </Box>

      <Row>
        <UnsubscribesChart dashboardFiltersLogic={dashboardFiltersLogic} />

        <WidgetWrapper
          query={unsubscribesPieWidgetLogic.subscribesUnsubscribesPieAggregatesQuery}
          height={rowHeight2}
          width={332}
        >
          <UnsubscribesPieWidget {...unsubscribesPieWidgetLogic} />
        </WidgetWrapper>

        <WidgetWrapper
          query={unsubscribesByPeriodWidgetLogic.unsubscribesByPeriodsQuery}
          height={rowHeight2}
          width={332}
        >
          <UnsubscribesByPeriodWidget {...unsubscribesByPeriodWidgetLogic} />
        </WidgetWrapper>
      </Row>

      <Divider />

      <CohortWidget dashboardFiltersLogic={dashboardFiltersLogic} />
    </Box>
  );
}
