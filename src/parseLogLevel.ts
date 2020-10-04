import LogLevel from "./LogLevel";

export default function parseLogLevel(input?: string): LogLevel {
  switch ((input ?? "info").toLowerCase()) {
    case "trace":
      return LogLevel.trace;
    case "debug":
      return LogLevel.debug;
    case "info":
      return LogLevel.info;
    case "warn":
      return LogLevel.warn;
    case "error":
      return LogLevel.error;
    case "fatal":
      return LogLevel.fatal;
    case "silent":
      return LogLevel.silent;
  }
  return LogLevel.info;
}
