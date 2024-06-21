// src/utils/fillMissingDates.ts
import moment from "moment";

interface DataItem {
  x: string | Date;
  y: number;
}

export function fillMissingDates(
  data: DataItem[],
  fromDate: Date,
  toDate: Date,
  timePeriod: "hour" | "day" | "week" | "month"
): DataItem[] {
  const filledData: DataItem[] = [];
  const dateMap = new Map<string, number>();
  const formatMap = {
    hour: "HH:mm:SS",
    day: "DD.MM.YYYY",
    week: "DD.MM.YYYY",
    month: "MM.YYYY",
  };

  const format = formatMap[timePeriod];

  // Create a map of dates and initialize with zeros
  const currentDate = moment(fromDate);
  const endDate = moment(toDate);
  while (currentDate <= endDate) {
    dateMap.set(currentDate.format(format), 0);
    currentDate.add(1, timePeriod);
  }

  // Fill the map with the actual data counts
  data.forEach((item) => {
    const date = moment(item.x).format(format);
    dateMap.set(date, item.y);
  });

  // Convert the map back to an array
  dateMap.forEach((count, date) => {
    filledData.push({ x: date, y: count });
  });

  return filledData;
}
