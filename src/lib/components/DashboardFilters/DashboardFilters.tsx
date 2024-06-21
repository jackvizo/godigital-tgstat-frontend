'use client'

import { Box, Button, ButtonGroup } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { periods, useDashboardFilters } from "./useDashboardFilters";
import { TimeUnit } from 'chart.js';
import { InviteLinkPickerModal } from '@/lib/components/InviteLinkPickerModal/InviteLinkPickerModal';
import { useInviteLinkPickerLogic } from '../InviteLinkPicker/useInviteLinkPickerLogic';
import { WidgetWrapper } from '../WidgetWrapper/WidgetWrapper';

export interface DashboardFiltersProps extends ReturnType<typeof useDashboardFilters> {
  isDatePickerHidden?: boolean
  periods?: TimeUnit[]
}

export function DashboardFilters(props: DashboardFiltersProps) {
  const inviteLinkPickerLogic = useInviteLinkPickerLogic();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, minWidth: 'auto' }}>
      {!props.isDatePickerHidden ? (
        <DatePicker
          format="DD.MM.YYYY"
          value={props.startDate}
          onChange={(newValue) => {
            newValue?.seconds(0)
            newValue?.minutes(0)
            props.setStartDate(newValue)
          }}
          label="Дата"
        />

      ) : null}
      <ButtonGroup variant="outlined" aria-label="outlined button group" size="large">
        {(props.periods || periods).map((period) => (
          <Button
            key={period}
            variant={props.timePeriod === period ? 'contained' : 'outlined'}
            onClick={() => props.setTimePeriod(period)}
          >
            {period === 'day' && 'День'}
            {period === 'week' && 'Неделя'}
            {period === 'month' && 'Месяц'}
            {period === 'year' && 'Год'}
          </Button>
        ))}
      </ButtonGroup>
      <WidgetWrapper
        query={inviteLinkPickerLogic.getGroupsQuery}
        minWidth={100}
      // minHeight={200}
      >
        <InviteLinkPickerModal {...inviteLinkPickerLogic} />
      </WidgetWrapper>
    </Box>
  )
}
