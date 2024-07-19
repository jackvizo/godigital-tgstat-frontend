"use client";

import { TimeUnit } from "chart.js";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { removeTime } from "@/lib/helpers/remove-time";
export const periods: TimeUnit[] = ["day", "week", "month", "year"];

const calculateEndDate = (startDate: Date | undefined, period: TimeUnit | undefined): Date => {
  if (!startDate) {
    return removeTime(dayjs(new Date())).toDate();
  }

  switch (period) {
    case "day":
      return removeTime(dayjs(startDate).add(1, "day")).toDate();
    case "week":
      return removeTime(dayjs(startDate).add(1, "week")).toDate();
    case "month":
      return removeTime(dayjs(startDate).add(1, "month")).toDate();
    case "year":
      return removeTime(dayjs(startDate).add(1, "year")).toDate();
    default:
      return removeTime(dayjs(startDate)).toDate();
  }
};

export function useDashboardDatePicker(props?: { startDate?: Date | undefined; initialPeriod?: TimeUnit }) {
  const [startDateState, setStartDateState] = useState<Date | undefined>(() => {
    if (props?.startDate) {
      return removeTime(dayjs(props.startDate)).toDate();
    }

    return removeTime(dayjs()).toDate();
  });
  const [timePeriod, setTimePeriod] = useState<TimeUnit | undefined>(props?.initialPeriod ?? "day");
  const [endDateState, setEndDateState] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (timePeriod) {
      setEndDateState(calculateEndDate(props?.startDate || startDateState, timePeriod));
    }
  }, [timePeriod, startDateState]);

  useEffect(() => {
    if (props?.startDate) {
      setStartDateState(props.startDate);
    }
  }, [props?.startDate]);

  return {
    startDateState,
    timePeriod,
    endDateState,
    setStartDateState,
    setTimePeriod,
    setEndDateState,
  };
}
