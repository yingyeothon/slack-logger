import { LogWriteConfig, LogWritePosition } from "./writeLogWith";

import LogLevel from "./LogLevel";
import Logger from "./Logger";
import envs from "./envs";
import flushSlack from "./flushSlack";
import parseLogLevel from "./parseLogLevel";
import writeLogWith from "./writeLogWith";

export default function useLogger({
  componentName,
  fileName,
  consoleLevel = envs.consoleLogLevel
    ? parseLogLevel(envs.consoleLogLevel)
    : LogLevel.trace,
  slackLevel = envs.slackLogLevel
    ? parseLogLevel(envs.slackLogLevel)
    : LogLevel.warn,
  maxSlackTextLength = 24 * 1024,
}: LogWritePosition & Partial<LogWriteConfig>): Logger {
  const writeLogWithLevel = writeLogWith({
    componentName,
    fileName,
    consoleLevel,
    slackLevel,
    maxSlackTextLength,
  });
  return {
    trace: writeLogWithLevel(LogLevel.trace),
    debug: writeLogWithLevel(LogLevel.debug),
    info: writeLogWithLevel(LogLevel.info),
    warn: writeLogWithLevel(LogLevel.warn),
    error: writeLogWithLevel(LogLevel.error),
    fatal: writeLogWithLevel(LogLevel.fatal),
    silent: writeLogWithLevel(LogLevel.silent),
    flushSlack,
  };
}
