# Slack logger

Simple logger using Slack webhook.

## Usage

```bash
npm i --save @yingyeothon/slack-logger
# yarn add @yingyeothon/slack-logger
```

```typescript
import { getLogger } from "@yingyeothon/slack-logger";

const logger = getLogger("handleMessage", __filename);
const context = {
  api: "/api/get",
  params: {
    path: "abc",
    query: "def",
  },
};
logger.info({ context }, "Something for info");
logger.trace({ context }, "Something for trace");
try {
  throw new Error("What's wrong!");
} catch (error) {
  logger.error({ error, context }, "Error occurred");
}

await logger.flushSlack();
```

## Environment variables

| Variable          | Description                   |
| ----------------- | ----------------------------- |
| SLACK_WEBHOOK_URL | Slack incoming Webhook URL    |
| SLACK_CHANNEL     | Channel Id of Slack           |
| SLACK_USER_NAME   | User name for Slack           |
| CONSOLE_LOG_LEVEL | Log level for Console logging |
| SLACK_LOG_LEVEL   | Log level for Slack logging   |

## Log levels

```typescript
const enum LogLevel {
  trace = 1,
  debug = 2,
  info = 3,
  warn = 4,
  error = 5,
  fatal = 6,
  silent = 99,
}
```

## License

MIT
