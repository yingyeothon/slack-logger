import Logger from "./Logger";
import useLogger from "./useLogger";

export default function getLogger(
  componentName: string,
  fileName: string
): Logger {
  return useLogger({
    componentName,
    fileName,
  });
}
