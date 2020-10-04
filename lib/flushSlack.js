"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalContext_1 = __importDefault(require("./globalContext"));
async function flushSlack() {
    return await globalContext_1.default.slackPromise;
}
exports.default = flushSlack;
//# sourceMappingURL=flushSlack.js.map