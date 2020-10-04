import LogLevel from "./LogLevel";
import globalContext from "./globalContext";
import postToSlack from "./postToSlack";
import serializeErrorInContext from "./serializeErrorInContext";
import toLogLevelName from "./toLogLevelName";

export type LogWritePosition = {
  componentName: string;
  fileName: string;
};
export type LogWriteConfig = {
  consoleLevel: LogLevel;
  slackLevel: LogLevel;
  maxSlackTextLength: number;
};
export type LogWriter = (context: unknown, message: string) => void;

export default function writeLogWith({
  componentName,
  fileName,
  consoleLevel,
  slackLevel,
  maxSlackTextLength,
}: Required<LogWritePosition & LogWriteConfig>): (
  level: LogLevel
) => LogWriter {
  return function (level: LogLevel): LogWriter {
    const levelLabel = toLogLevelName(level).toUpperCase();

    function writeToConsole(context: unknown, message: string): void {
      console.log(now(), componentName, fileName, levelLabel, message, context);
    }

    function writeToSlack(context: unknown, message: string): void {
      serializeErrorInContext(context);
      const content = JSON.stringify(
        { timestamp: now(), componentName, fileName, context },
        null,
        2
      ).slice(0, maxSlackTextLength);
      globalContext.slackPromise = globalContext.slackPromise
        .then(() =>
          postToSlack(`[${levelLabel}] ${message}\n` + "```" + content + "```")
        )
        .catch((error) => {
          // Ignore error
          console.error("Cannot send a message to slack", error);
          return Promise.resolve();
        });
    }

    return function (context: unknown, message: string): void {
      if (consoleLevel <= level) {
        writeToConsole(context, message);
      }
      if (slackLevel <= level) {
        writeToSlack(context, message);
      }
    };
  };
}

function now() {
  return new Date().toISOString();
}
