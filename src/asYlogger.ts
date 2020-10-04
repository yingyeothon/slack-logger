import * as Y from "@yingyeothon/logger";

import { LogLevels } from "./LogLevel";
import Logger from "./Logger";

export default function asYlogger(logger: Logger): Y.Logger {
  function adapter(level: LogLevels) {
    return function (...args: unknown[]) {
      return logger[level]({}, args.join(" "));
    };
  }
  return {
    severity: (process.env.SLACK_LOG_LEVEL ??
      process.env.CONSOLE_LOG_LEVEL ??
      "info") as Y.LogSeverity,
    debug: adapter("debug"),
    info: adapter("info"),
    error: adapter("error"),
  };
}
