"use client";

import { useDashboardDatePicker } from "@/lib/components/DashboardDatePicker/useDashboardDatePicker";
import { useInviteLinkPickerLogic } from "@/lib/components/InviteLinkPicker/useInviteLinkPickerLogic";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";
import { useTgChannelsPickerLogic } from "@/lib/components/TgChannelsPicker/useTgChannelsPickerLogic";
import { TimeUnit } from "chart.js";
import dayjs from "dayjs";

export interface DashboardFilters {
  tgChannelIds: number[];
  checkedTgInviteLinks: string[];
  allTgInviteLinks: string[];
  startDate: Date | undefined;
  endDate: Date | undefined;
  utcStartDate: string | undefined;
  utcEndDate: string | undefined;
  timePeriod: TimeUnit | undefined;
}

export function useDashboardFiltersLogic() {
  const inviteLinkPickerLogic = useInviteLinkPickerLogic();
  const phoneNumberListLogic = usePhoneNumberListLogic();
  const tgChannelsPickerLogic = useTgChannelsPickerLogic({ phoneNumberListLogic });
  const filterDatePickerLogic = useDashboardDatePicker();

  const filters: DashboardFilters = {
    checkedTgInviteLinks: inviteLinkPickerLogic.checkedTgInviteLinks,
    allTgInviteLinks: inviteLinkPickerLogic.allTgInviteLinks,
    tgChannelIds: tgChannelsPickerLogic.trackedChannels
      ?.filter((item) => item.is_checked)
      ?.map((item) => Number(item.tg_channel_id)),
    startDate: filterDatePickerLogic.startDateState,
    endDate: filterDatePickerLogic.endDateState,
    utcStartDate: filterDatePickerLogic.startDateState
      ? dayjs(filterDatePickerLogic.startDateState).format("YYYY-MM-DD")
      : undefined,
    utcEndDate: filterDatePickerLogic.endDateState
      ? dayjs(filterDatePickerLogic.endDateState).format("YYYY-MM-DD")
      : undefined,
    timePeriod: filterDatePickerLogic.timePeriod,
  };

  const { trackedTgChannelsQuery } = tgChannelsPickerLogic;

  const isNoTrackedChannels =
    !trackedTgChannelsQuery.loading &&
    !!(trackedTgChannelsQuery.previousData ?? trackedTgChannelsQuery.data) &&
    filters.tgChannelIds.length < 1;

  const isTgChannelsInitiallyLoading =
    trackedTgChannelsQuery.loading && !(trackedTgChannelsQuery.previousData ?? trackedTgChannelsQuery.data);

  return {
    filters,
    isNoTrackedChannels,
    isTgChannelsInitiallyLoading,
    phoneNumberListLogic,
    inviteLinkPickerLogic,
    tgChannelsPickerLogic,
    filterDatePickerLogic,
  };
}
