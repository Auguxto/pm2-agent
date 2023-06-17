"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importDefault(require("../lib/command"));
const list_1 = __importDefault(require("./list"));
const stop = async (id) => {
    const proccess_list = await (0, list_1.default)();
    const proccess_target = proccess_list.filter((process) => process.id === id);
    if (proccess_target.length === 0)
        return "Process id not found.";
    try {
        const status = proccess_target[0].status;
        if (status === "online") {
            const result = await (0, command_1.default)(`pm2 stop ${id}`);
            if (result.includes(`[PM2] Applying action stopProcessId on app [${id}](ids: [ '${id}' ])`)) {
                return "Process stopped.";
            }
        }
        else if (status === "stopped") {
            return "Process already stopped.";
        }
    }
    catch {
        return "Proccess stop failed.";
    }
    return "";
};
exports.default = stop;
