'use client'

import { Button, ButtonGroup, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { TimeUnit } from 'chart.js';
import dayjs from 'dayjs';
import { periods, useDashboardDatePicker } from "./useDashboardDatePicker";

export interface DashboardDatePickerProps extends ReturnType<typeof useDashboardDatePicker> {
  periods?: TimeUnit[]
  displayDatePickers?: boolean;
  displayPeriodPicker?: boolean;
}

export function DashboardDatePicker(props: DashboardDatePickerProps) {
  return (
    <Stack direction={{ xs: 'row', md: 'row' }} alignItems='center' spacing={1} useFlexGap flexWrap="wrap">
      {props.displayDatePickers ?? true ? (
        <>
          <DatePicker
            sx={{ flexGrow: 1 }}
            format="DD.MM.YYYY"
            value={dayjs(props.startDateState)}
            onChange={(newValue) => {
              newValue?.set('second', 0)?.set?.('minutes', 0)
              props.setStartDateState(newValue?.toDate())
            }}
            label="Дата от"
            slotProps={{
              textField: {
                size: 'small'
              }
            }}
          />

          <DatePicker
            sx={{ flexGrow: 1 }}
            format="DD.MM.YYYY"
            value={dayjs(props.endDateState)}
            onChange={(newValue) => {
              newValue?.set('second', 0)?.set?.('minutes', 0)
              props.setEndDateState(newValue?.toDate())
              props.setTimePeriod(undefined)
            }}
            label="Дата до"
            slotProps={{
              textField: {
                size: 'small'
              }
            }}
          />
        </>
      ) : null}

      {props.displayPeriodPicker ?? true ? (
        <Stack direction={{ xs: 'row', md: 'row' }} alignItems='center' spacing={1} useFlexGap flexWrap="wrap">
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ flexGrow: 1 }}>
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
        </Stack>
      ) : null}

    </Stack>

  )
}
