"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useLogger_1 = __importDefault(require("./useLogger"));
function getLogger(componentName, fileName) {
    return useLogger_1.default({
        componentName,
        fileName,
    });
}
exports.default = getLogger;
//# sourceMappingURL=getLogger.js.map