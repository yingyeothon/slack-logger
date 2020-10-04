import { FlushSlack } from "./flushSlack";
import { LogLevels } from "./LogLevel";
import { LogWriter } from "./writeLogWith";

type Logger = { [K in LogLevels]: LogWriter } & {
  flushSlack: FlushSlack;
};

export default Logger;
