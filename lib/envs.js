"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs = {
    slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
    slackChannel: process.env.SLACK_CHANNEL,
    slackUserName: process.env.SLACK_USER_NAME,
    consoleLogLevel: process.env.CONSOLE_LOG_LEVEL,
    slackLogLevel: process.env.SLACK_LOG_LEVEL,
};
exports.default = envs;
//# sourceMappingURL=envs.js.map