'use client'

import { DashboardDatePicker } from '@/lib/components/DashboardDatePicker/DashboardDatePicker';
import { InviteLinkPicker } from '@/lib/components/InviteLinkPicker/InviteLinkPicker';
import { ModalWrapper } from '@/lib/components/ModalWrapper/ModalWrapper';
import { TgChannelsPicker } from '@/lib/components/TgChannelsPicker/TgChannelsPicker';
import { WidgetWrapper } from '@/lib/components/WidgetWrapper/WidgetWrapper';
import { ButtonGroup, FormControl, Stack } from '@mui/material';
import { useDashboardFiltersLogic } from "./useDashboardFiltersLogic";
import PhoneNumberList from '@/lib/components/PhoneNumberList/PhoneNumberList';
import { usePhoneNumberListLogic } from '@/lib/components/PhoneNumberList/usePhoneNumberListLogic';

export interface DashboardFiltersProps {
  dashboardFiltersLogic: ReturnType<typeof useDashboardFiltersLogic>;
  phoneNumberListLogic: ReturnType<typeof usePhoneNumberListLogic>
}

export function DashboardFilters(props: DashboardFiltersProps) {
  return (
    <FormControl size='small' sx={{ width: { xs: '100%', md: 'auto' } }}>
      <Stack direction={{ xs: 'row', md: 'row' }} alignItems='center' spacing={1} useFlexGap flexWrap="wrap">
        <DashboardDatePicker {...props.dashboardFiltersLogic.filterDatePickerLogic} />
        <WidgetWrapper
          queries={[
            props.dashboardFiltersLogic.inviteLinkPickerLogic.getGroupsQuery,
            props.dashboardFiltersLogic.tgChannelsPickerLogic.getTelegramChannelsQuery
          ]}
          width={187}
          height={40}
        >
          <ButtonGroup variant="outlined">
            <ModalWrapper label="Ссылки">
              <InviteLinkPicker {...props.dashboardFiltersLogic.inviteLinkPickerLogic} />
            </ModalWrapper>
            <ModalWrapper label="Каналы">
              <TgChannelsPicker {...props.dashboardFiltersLogic.tgChannelsPickerLogic} />
              <PhoneNumberList {...props.phoneNumberListLogic} />
            </ModalWrapper>
          </ButtonGroup>
        </WidgetWrapper>
      </Stack>
    </FormControl>
  )
}
