"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = __importDefault(require("./envs"));
const flushSlack_1 = __importDefault(require("./flushSlack"));
const parseLogLevel_1 = __importDefault(require("./parseLogLevel"));
const writeLogWith_1 = __importDefault(require("./writeLogWith"));
function useLogger({ componentName, fileName, consoleLevel = envs_1.default.consoleLogLevel
    ? parseLogLevel_1.default(envs_1.default.consoleLogLevel)
    : 1, slackLevel = envs_1.default.slackLogLevel
    ? parseLogLevel_1.default(envs_1.default.slackLogLevel)
    : 4, maxSlackTextLength = 24 * 1024, }) {
    const writeLogWithLevel = writeLogWith_1.default({
        componentName,
        fileName,
        consoleLevel,
        slackLevel,
        maxSlackTextLength,
    });
    return {
        trace: writeLogWithLevel(1),
        debug: writeLogWithLevel(2),
        info: writeLogWithLevel(3),
        warn: writeLogWithLevel(4),
        error: writeLogWithLevel(5),
        fatal: writeLogWithLevel(6),
        silent: writeLogWithLevel(99),
        flushSlack: flushSlack_1.default,
    };
}
exports.default = useLogger;
//# sourceMappingURL=useLogger.js.map