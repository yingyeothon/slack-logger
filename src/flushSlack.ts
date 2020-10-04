import globalContext from "./globalContext";

export type FlushSlack = () => Promise<void>;

export default async function flushSlack(): Promise<void> {
  return await globalContext.slackPromise;
}
