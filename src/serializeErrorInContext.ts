import { serializeError } from "serialize-error";

export default function serializeErrorInContext(context: unknown): void {
  if (!(context instanceof Object)) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyContext = context as any;
  for (const [key, value] of Object.entries(context)) {
    if (value instanceof Error) {
      anyContext[key] = serializeError(value);
    }
  }
}
