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
  const [timePeriod, setTimePeriod] = useState<TimeUnit | undefined>(props?.initialPeriod ?? "day");

  const [nextStartDate, setNextStartDate] = useState<Date | undefined>(() => {
    if (props?.startDate) {
      return removeTime(dayjs(props.startDate)).toDate();
    }
    return removeTime(dayjs()).toDate();
  });

  const [nextEndDate, setNextEndDate] = useState<Date | undefined>(() =>
    calculateEndDate(props?.startDate ?? nextStartDate, timePeriod)
  );
  const [startDateState, setStartDateState] = useState<Date | undefined>(nextStartDate);
  const [endDateState, setEndDateState] = useState<Date | undefined>(nextEndDate);

  const doSetStartDate = (date: Date) => {
    let calculatedEndDate = timePeriod === undefined ? endDateState : calculateEndDate(date, timePeriod);
    setNextStartDate(date);
    setNextEndDate(calculatedEndDate);
  };

  const doSetEndDate = (date: Date) => {
    setTimePeriod(undefined);
    setNextStartDate(startDateState);
    setNextEndDate(date);
  };

  const doSetTimePeriod = (period: TimeUnit | undefined) => {
    const startDate = props?.startDate ?? startDateState;
    const calculatedEndDate = calculateEndDate(startDate, period);
    setTimePeriod(period);
    setNextStartDate(startDate);
    setNextEndDate(calculatedEndDate);
  };

  useEffect(() => {
    if (props?.startDate) {
      doSetStartDate(props.startDate);
    }
  }, [props?.startDate]);

  useEffect(() => {
    if (nextEndDate && nextStartDate) {
      setStartDateState(nextStartDate);
      setEndDateState(nextEndDate);
      setNextStartDate(undefined);
      setNextEndDate(undefined);
    }
  }, [nextEndDate, nextStartDate]);

  return {
    startDateState,
    endDateState,
    timePeriod,
    setStartDateState: doSetStartDate,
    setEndDateState: doSetEndDate,
    setTimePeriod: doSetTimePeriod,
  };
}
