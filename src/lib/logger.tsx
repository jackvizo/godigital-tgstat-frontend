import moment from "moment";
import winston, { LoggerOptions } from "winston";

const replacer = (_key: string, value: any) => {
  if (value === undefined) {
    return "undefined";
  }
  if (value === null) {
    return "null";
  }
  if (value === "") {
    return "";
  }
  return value;
};

const debugLoggerOptions: LoggerOptions = {
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message, d, ...info }) =>
        `${moment(timestamp).format("HH:mm:ss")} ${level} ${d.endpoint} ${d.reqId.substring(
          0,
          7
        )} | ${message} ${JSON.stringify({ ...info }, replacer, 2)}`
    )
  ),
  transports: [new winston.transports.Console({})],
  level: process.env.LOG_LEVEL || "info",
};

const productionLoggerOptions: LoggerOptions = {
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json({
      replacer,
    })
  ),
  transports: [new winston.transports.Console({})],
  level: process.env.LOG_LEVEL || "info",
};

export const loggerOptions: LoggerOptions =
  process.env.NODE_ENV === "development" ? debugLoggerOptions : productionLoggerOptions;

const logger = winston.createLogger({
  ...loggerOptions,
});

export default logger;
