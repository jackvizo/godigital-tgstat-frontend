import dayjs from "dayjs";

export const removeTime = (date: dayjs.Dayjs) => date.hour(0).minute(0).second(0).millisecond(0);
