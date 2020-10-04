"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = __importDefault(require("./envs"));
const node_fetch_1 = __importDefault(require("node-fetch"));
async function postToSlack(text) {
    var _a;
    if (!envs_1.default.slackWebhookUrl) {
        return;
    }
    const response = await node_fetch_1.default(envs_1.default.slackWebhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            channel: envs_1.default.slackChannel,
            username: (_a = envs_1.default.slackUserName) !== null && _a !== void 0 ? _a : "Logger",
        }),
    });
    const responseText = await response.text();
    console.debug("Into the Slack", responseText);
}
exports.default = postToSlack;
//# sourceMappingURL=postToSlack.js.map