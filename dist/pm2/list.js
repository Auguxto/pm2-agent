"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importDefault(require("../lib/command"));
const list = async () => {
    const result = await (0, command_1.default)("pm2 list");
    try {
        let proccess_data = result
            .split("\n")
            .filter((data) => Boolean(data))
            .map((data) => data.trim())
            .slice(1);
        // id name namespace version mode pid uptime restarts status cpu mem user watching
        const proccess_list = proccess_data
            .map((proccess) => {
            return proccess.split(" ").filter((data) => Boolean(data));
        })
            .map((proccess) => {
            return {
                id: Number(proccess[0]),
                name: proccess[1],
                namespace: proccess[2],
                version: proccess[3],
                mode: proccess[4],
                pid: Number(proccess[5]),
                uptime: proccess[6],
                restarts: Number(proccess[7]),
                status: proccess[8],
                cpu: proccess[9],
                mem: proccess[10],
                user: proccess[11],
                watching: proccess[12],
            };
        });
        return proccess_list;
    }
    catch { }
    return [];
};
exports.default = list;
