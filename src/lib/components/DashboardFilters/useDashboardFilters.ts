"use client";

import { TimeUnit } from "chart.js";
import moment from "moment";
import { useEffect, useState } from "react";

export const periods: TimeUnit[] = ["day", "week", "month", "year"];

const calculateEndDate = (startDate: moment.Moment, period: TimeUnit): moment.Moment => {
  switch (period) {
    case "day":
      return moment(startDate).add(1, "day");
    case "week":
      return moment(startDate).add(1, "week");
    case "month":
      return moment(startDate).add(1, "month");
    case "year":
      return moment(startDate).add(1, "year");
    default:
      return moment(startDate);
  }
};

export function useDashboardFilters(props?: { startDate?: moment.Moment | null; initialPeriod?: TimeUnit }) {
  const [tgChannelIds] = useState([1, 2, 3]);
  const [startDate, setStartDate] = useState<moment.Moment | null>(() => {
    if (props?.startDate) {
      return moment(props.startDate);
    }

    const d = moment();
    d.seconds(0);
    d.minutes(0);

    return d.clone();
  });
  const [timePeriod, setTimePeriod] = useState<TimeUnit>(props?.initialPeriod ?? "day");

  const endDate = calculateEndDate((props?.startDate || startDate)?.clone()!, timePeriod);

  return {
    tgChannelIds,
    startDate,
    endDate,
    timePeriod,
    setStartDate,
    setTimePeriod,
  };
}
