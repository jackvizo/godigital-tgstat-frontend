"use client";

import { TimeUnit } from "chart.js";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const periods: TimeUnit[] = ["day", "week", "month", "year"];

const calculateEndDate = (startDate: Date | undefined, period: TimeUnit | undefined): Date => {
  if (!startDate) {
    return new Date();
  }

  switch (period) {
    case "day":
      return dayjs(startDate).add(1, "day").toDate();
    case "week":
      return dayjs(startDate).add(1, "week").toDate();
    case "month":
      return dayjs(startDate).add(1, "month").toDate();
    case "year":
      return dayjs(startDate).add(1, "year").toDate();
    default:
      return dayjs(startDate).toDate();
  }
};

export function useDashboardDatePicker(props?: { startDate?: Date | undefined; initialPeriod?: TimeUnit }) {
  const [startDateState, setStartDateState] = useState<Date | undefined>(() => {
    if (props?.startDate) {
      return dayjs(props.startDate).toDate();
    }

    const d = dayjs().second(0).minute(0);

    return d.toDate();
  });
  const [timePeriod, setTimePeriod] = useState<TimeUnit | undefined>(props?.initialPeriod ?? "day");
  const [endDateState, setEndDateState] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (timePeriod) {
      setEndDateState(calculateEndDate(props?.startDate || startDateState, timePeriod));
    }
  }, [timePeriod, startDateState]);

  return {
    startDateState,
    timePeriod,
    endDateState,
    setStartDateState,
    setTimePeriod,
    setEndDateState,
  };
}
