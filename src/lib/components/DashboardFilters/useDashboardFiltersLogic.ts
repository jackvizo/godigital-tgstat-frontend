"use client";

import { useDashboardDatePicker } from "@/lib/components/DashboardDatePicker/useDashboardDatePicker";
import { useInviteLinkPickerLogic } from "@/lib/components/InviteLinkPicker/useInviteLinkPickerLogic";
import { useTgChannelsPickerLogic } from "@/lib/components/TgChannelsPicker/useTgChannelsPickerLogic";
import { TimeUnit } from "chart.js";

export interface DashboardFilters {
  tgChannelIds: number[];
  startDate: Date | undefined;
  endDate: Date | undefined;
  timePeriod: TimeUnit;
}

export function useDashboardFiltersLogic() {
  const inviteLinkPickerLogic = useInviteLinkPickerLogic();
  const tgChannelsPickerLogic = useTgChannelsPickerLogic();
  const filterDatePickerLogic = useDashboardDatePicker();

  const filters: DashboardFilters = {
    // tgChannelIds: tgChannelsPickerLogic.channels?.map((item) => Number(item.tg_channel_id)),
    tgChannelIds: [1, 2, 3],
    startDate: filterDatePickerLogic.startDateState,
    endDate: filterDatePickerLogic.endDateState,
    timePeriod: filterDatePickerLogic.timePeriod,
  };

  return {
    filters,
    inviteLinkPickerLogic,
    tgChannelsPickerLogic,
    filterDatePickerLogic,
  };
}
