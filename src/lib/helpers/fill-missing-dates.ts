// src/utils/fillMissingDates.ts
import { TimeUnit } from "chart.js";
import dayjs from "dayjs";

interface DataItem {
  x: string | Date;
  y: number;
}

const timeUnits: TimeUnit[] = ["hour", "day", "week", "month"];

export function fillMissingDates(
  data: DataItem[],
  fromDate: Date | undefined,
  toDate: Date | undefined,
  timePeriod: TimeUnit
): DataItem[] {
  if (!fromDate || !toDate || !timeUnits.includes(timePeriod)) {
    return data;
  }

  const filledData: DataItem[] = [];
  const dateMap = new Map<string, number>();
  const formatMap: { [key in TimeUnit]?: string } = {
    hour: "HH:mm:ss",
    day: "DD.MM.YYYY",
    week: "DD.MM.YYYY",
    month: "MM.YYYY",
  };

  const format = formatMap[timePeriod];

  // Create a map of dates and initialize with zeros
  let currentDate = dayjs(fromDate);
  const endDate = dayjs(toDate);

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    dateMap.set(currentDate.format(format), 0);
    currentDate = currentDate.add(1, timePeriod as any);
  }

  // Fill the map with the actual data counts
  data.forEach((item) => {
    const date = dayjs(item.x).format(format);
    dateMap.set(date, item.y);
  });

  // Convert the map back to an array
  dateMap.forEach((count, date) => {
    filledData.push({ x: date, y: count });
  });

  return filledData;
}
