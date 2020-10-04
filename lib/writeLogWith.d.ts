import LogLevel from "./LogLevel";
export declare type LogWritePosition = {
    componentName: string;
    fileName: string;
};
export declare type LogWriteConfig = {
    consoleLevel: LogLevel;
    slackLevel: LogLevel;
    maxSlackTextLength: number;
};
export declare type LogWriter = (context: unknown, message: string) => void;
export default function writeLogWith({ componentName, fileName, consoleLevel, slackLevel, maxSlackTextLength, }: Required<LogWritePosition & LogWriteConfig>): (level: LogLevel) => LogWriter;
//# sourceMappingURL=writeLogWith.d.ts.map