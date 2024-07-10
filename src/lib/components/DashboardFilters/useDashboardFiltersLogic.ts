"use client";

import { useDashboardDatePicker } from "@/lib/components/DashboardDatePicker/useDashboardDatePicker";
import { useInviteLinkPickerLogic } from "@/lib/components/InviteLinkPicker/useInviteLinkPickerLogic";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import { useTgChannelsPickerLogic } from "@/lib/components/TgChannelsPicker/useTgChannelsPickerLogic";
import { TimeUnit } from "chart.js";

export interface DashboardFilters {
  tgChannelIds: number[];
  startDate: Date | undefined;
  endDate: Date | undefined;
  timePeriod: TimeUnit | undefined;
}

export function useDashboardFiltersLogic() {
  const inviteLinkPickerLogic = useInviteLinkPickerLogic();
  const phoneNumberListLogic = usePhoneNumberListLogic();
  const tgChannelsPickerLogic = useTgChannelsPickerLogic({ phoneNumberListLogic });
  const filterDatePickerLogic = useDashboardDatePicker();

  const filters: DashboardFilters = {
    tgChannelIds: tgChannelsPickerLogic.channels
      ?.filter((item) => item.is_tracked)
      ?.map((item) => Number(item.channel_id)),
    startDate: filterDatePickerLogic.startDateState,
    endDate: filterDatePickerLogic.endDateState,
    timePeriod: filterDatePickerLogic.timePeriod,
  };

  return {
    filters,
    phoneNumberListLogic,
    inviteLinkPickerLogic,
    tgChannelsPickerLogic,
    filterDatePickerLogic,
  };
}
