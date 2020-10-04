const enum LogLevel {
  trace = 1,
  debug = 2,
  info = 3,
  warn = 4,
  error = 5,
  fatal = 6,
  silent = 99,
}

export default LogLevel;

export type LogLevels = keyof typeof LogLevel;
