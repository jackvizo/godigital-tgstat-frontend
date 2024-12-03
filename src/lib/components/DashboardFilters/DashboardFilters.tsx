"use client";

import { DashboardDatePicker } from "@/lib/components/DashboardDatePicker/DashboardDatePicker";
import { InviteLinkPicker } from "@/lib/components/InviteLinkPicker/InviteLinkPicker";
import { ModalWrapper } from "@/lib/components/ModalWrapper/ModalWrapper";
import { WidgetWrapper } from "@/lib/components/WidgetWrapper/WidgetWrapper";
import { ButtonGroup, FormControl, Stack } from "@mui/material";
import { TgChannelsAndPhoneNumbersPicker } from "../TgChannelsAndPhoneNumbersPicker/TgChannelsAndPhoneNumbersPicker";
import { useDashboardFiltersLogic } from "./useDashboardFiltersLogic";

export interface DashboardFiltersProps {
  dashboardFiltersLogic: ReturnType<typeof useDashboardFiltersLogic>;
}

export function DashboardFilters(props: DashboardFiltersProps) {
  return (
    <FormControl size="small" sx={{ width: { xs: "100%", md: "auto" } }}>
      <Stack
        direction={{ xs: "row", md: "row" }}
        alignItems="center"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >
        <DashboardDatePicker
          {...props.dashboardFiltersLogic.filterDatePickerLogic}
        />
        <WidgetWrapper
          queries={[
            props.dashboardFiltersLogic.inviteLinkPickerLogic.getGroupsQuery,
          ]}
          width={187}
          height={40}
        >
          <ButtonGroup variant="outlined">
            <ModalWrapper label="Ссылки">
              <InviteLinkPicker
                {...props.dashboardFiltersLogic.inviteLinkPickerLogic}
              />
            </ModalWrapper>
            <ModalWrapper label="Каналы">
              <TgChannelsAndPhoneNumbersPicker
                phoneNumberListLogic={
                  props.dashboardFiltersLogic.phoneNumberListLogic
                }
                tgChannelsPickerLogic={
                  props.dashboardFiltersLogic.tgChannelsPickerLogic
                }
              />
            </ModalWrapper>
          </ButtonGroup>
        </WidgetWrapper>
      </Stack>
    </FormControl>
  );
}
