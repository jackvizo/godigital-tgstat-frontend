import { TimeUnit } from "chart.js";
import dayjs, { ManipulateType } from "dayjs";

interface DataItem {
  x: string | Date;
  y: number;
}

export function fillMissingDates(
  data: DataItem[],
  fromDate: Date | undefined,
  toDate: Date | undefined,
  timePeriod: TimeUnit | undefined
): DataItem[] {
  if (!fromDate || !toDate || !timePeriod) {
    return data;
  }

  const filledData: DataItem[] = [];
  const dateMap = new Map<string, number>();
  const formatMap: Partial<Record<TimeUnit, string>> = {
    hour: "HH:mm:ss",
    day: "DD.MM.YYYY",
    week: "DD.MM.YYYY",
    month: "MM.YYYY",
  };

  const format = formatMap[timePeriod as keyof typeof formatMap] || "DD.MM.YYYY";
  const periodType: ManipulateType =
    timePeriod === "hour" ? "hour" : timePeriod === "day" ? "day" : timePeriod === "week" ? "week" : "month";

  // Create a map of dates and initialize with zeros
  let currentDate = dayjs(fromDate);
  const endDate = dayjs(toDate);
  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    dateMap.set(currentDate.format(format), 0);
    currentDate = currentDate.add(1, periodType);
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
