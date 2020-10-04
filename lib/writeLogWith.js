"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalContext_1 = __importDefault(require("./globalContext"));
const postToSlack_1 = __importDefault(require("./postToSlack"));
const serializeErrorInContext_1 = __importDefault(require("./serializeErrorInContext"));
const toLogLevelName_1 = __importDefault(require("./toLogLevelName"));
function writeLogWith({ componentName, fileName, consoleLevel, slackLevel, maxSlackTextLength, }) {
    return function (level) {
        const levelLabel = toLogLevelName_1.default(level).toUpperCase();
        function writeToConsole(context, message) {
            console.log(now(), componentName, fileName, levelLabel, message, context);
        }
        function writeToSlack(context, message) {
            serializeErrorInContext_1.default(context);
            const content = JSON.stringify({ timestamp: now(), componentName, fileName, context }, null, 2).slice(0, maxSlackTextLength);
            globalContext_1.default.slackPromise = globalContext_1.default.slackPromise
                .then(() => postToSlack_1.default(`[${levelLabel}] ${message}\n` + "```" + content + "```"))
                .catch((error) => {
                console.error("Cannot send a message to slack", error);
                return Promise.resolve();
            });
        }
        return function (context, message) {
            if (consoleLevel <= level) {
                writeToConsole(context, message);
            }
            if (slackLevel <= level) {
                writeToSlack(context, message);
            }
        };
    };
}
exports.default = writeLogWith;
function now() {
    return new Date().toISOString();
}
//# sourceMappingURL=writeLogWith.js.map