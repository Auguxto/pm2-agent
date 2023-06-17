"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importDefault(require("../lib/command"));
const list_1 = __importDefault(require("./list"));
const start = async (id) => {
    const proccess_list = await (0, list_1.default)();
    const proccess_target = proccess_list.filter((process) => process.id === id);
    if (proccess_target.length === 0)
        return "Process id not found.";
    try {
        const status = proccess_target[0].status;
        if (status === "stopped") {
            const result = await (0, command_1.default)(`pm2 start ${id}`);
            if (result.includes(`[PM2] Applying action restartProcessId on app [${id}](ids: [ '${id}' ])`)) {
                return "Process started.";
            }
        }
        else if (status === "online") {
            return "Process already running.";
        }
    }
    catch {
        return "Proccess start failed.";
    }
    return "";
};
exports.default = start;
