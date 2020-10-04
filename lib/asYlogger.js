"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asYlogger(logger) {
    var _a, _b;
    function adapter(level) {
        return function (...args) {
            return logger[level]({}, args.join(" "));
        };
    }
    return {
        severity: ((_b = (_a = process.env.SLACK_LOG_LEVEL) !== null && _a !== void 0 ? _a : process.env.CONSOLE_LOG_LEVEL) !== null && _b !== void 0 ? _b : "info"),
        debug: adapter("debug"),
        info: adapter("info"),
        error: adapter("error"),
    };
}
exports.default = asYlogger;
//# sourceMappingURL=asYlogger.js.map