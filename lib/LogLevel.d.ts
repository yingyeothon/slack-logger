declare const enum LogLevel {
    trace = 1,
    debug = 2,
    info = 3,
    warn = 4,
    error = 5,
    fatal = 6,
    silent = 99
}
export default LogLevel;
export declare type LogLevels = keyof typeof LogLevel;
//# sourceMappingURL=LogLevel.d.ts.map