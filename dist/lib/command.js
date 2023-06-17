"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = __importDefault(require("node:util"));
const exec = node_util_1.default.promisify(require("node:child_process").exec);
const command = async (command) => {
    try {
        const { stdout, stderr } = (await exec(command));
        return stdout
            .replaceAll("│", "")
            .replaceAll("─", "")
            .replaceAll("┐", "")
            .replaceAll("┬", "")
            .replaceAll("┼", "")
            .replaceAll("└", "")
            .replaceAll("┘", "")
            .replaceAll("┴", "")
            .replaceAll("┤", "")
            .replaceAll("├", "")
            .replaceAll("┌", "");
    }
    catch (error) {
        console.log(error);
    }
    return "";
};
exports.default = command;
