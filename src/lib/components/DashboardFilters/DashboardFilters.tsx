'use client'

import { InviteLinkPicker } from '@/lib/components/InviteLinkPicker/InviteLinkPicker';
import { ModalWrapper } from '@/lib/components/ModalWrapper/ModalWrapper';
import { TgChannelsPicker } from '@/lib/components/TgChannelsPicker/TgChannelsPicker';
import { WidgetWrapper } from '@/lib/components/WidgetWrapper/WidgetWrapper';
import { ButtonGroup, FormControl, Stack } from '@mui/material';
import { DashboardDatePicker, DashboardDatePickerProps } from '@/lib/components/DashboardDatePicker/DashboardDatePicker';
import { useDashboardFiltersLogic } from "./useDashboardFiltersLogic";

export interface DashboardFiltersProps {
  dashboardFiltersLogic: ReturnType<typeof useDashboardFiltersLogic>;
}

export function DashboardFilters(props: DashboardFiltersProps) {
  return (
    <FormControl size='small' sx={{ width: { xs: '100%', md: 'auto' } }}>
      <Stack direction={{ xs: 'row', md: 'row' }} alignItems='center' spacing={1} useFlexGap flexWrap="wrap">
        <DashboardDatePicker {...props.dashboardFiltersLogic.filterDatePickerLogic} />
        <WidgetWrapper
          queries={[props.dashboardFiltersLogic.inviteLinkPickerLogic.getGroupsQuery, props.dashboardFiltersLogic.tgChannelsPickerLogic.getTelegramChannelsQuery]}
          width={187}
          height={40}
        >
          <ButtonGroup variant="outlined">
            <ModalWrapper label="Ссылки">
              <InviteLinkPicker {...props.dashboardFiltersLogic.inviteLinkPickerLogic} />
            </ModalWrapper>
            <ModalWrapper label="Каналы">
              <TgChannelsPicker {...props.dashboardFiltersLogic.tgChannelsPickerLogic} />
            </ModalWrapper>
          </ButtonGroup>
        </WidgetWrapper>
      </Stack>
    </FormControl>
  )
}
