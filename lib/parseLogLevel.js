"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseLogLevel(input) {
    switch ((input !== null && input !== void 0 ? input : "info").toLowerCase()) {
        case "trace":
            return 1;
        case "debug":
            return 2;
        case "info":
            return 3;
        case "warn":
            return 4;
        case "error":
            return 5;
        case "fatal":
            return 6;
        case "silent":
            return 99;
    }
    return 3;
}
exports.default = parseLogLevel;
//# sourceMappingURL=parseLogLevel.js.map