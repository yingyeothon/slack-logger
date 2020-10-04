import { FlushSlack } from "./flushSlack";
import { LogLevels } from "./LogLevel";
import { LogWriter } from "./writeLogWith";
declare type Logger = {
    [K in LogLevels]: LogWriter;
} & {
    flushSlack: FlushSlack;
};
export default Logger;
//# sourceMappingURL=Logger.d.ts.map