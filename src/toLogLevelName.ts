import LogLevel from "./LogLevel";

export default function toLogLevelName(level: LogLevel): string {
  switch (level) {
    case LogLevel.trace:
      return "trace";
    case LogLevel.debug:
      return "debug";
    case LogLevel.info:
      return "info";
    case LogLevel.warn:
      return "warn";
    case LogLevel.error:
      return "error";
    case LogLevel.fatal:
      return "fatal";
    case LogLevel.silent:
      return "silent";
  }
}
