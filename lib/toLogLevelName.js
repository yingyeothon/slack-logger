"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toLogLevelName(level) {
    switch (level) {
        case 1:
            return "trace";
        case 2:
            return "debug";
        case 3:
            return "info";
        case 4:
            return "warn";
        case 5:
            return "error";
        case 6:
            return "fatal";
        case 99:
            return "silent";
    }
}
exports.default = toLogLevelName;
//# sourceMappingURL=toLogLevelName.js.map