"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialize_error_1 = require("serialize-error");
function serializeErrorInContext(context) {
    if (!(context instanceof Object)) {
        return;
    }
    const anyContext = context;
    for (const [key, value] of Object.entries(context)) {
        if (value instanceof Error) {
            anyContext[key] = serialize_error_1.serializeError(value);
        }
    }
}
exports.default = serializeErrorInContext;
//# sourceMappingURL=serializeErrorInContext.js.map