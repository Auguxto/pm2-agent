"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_1 = __importDefault(require("../../../../pm2/list"));
const start_1 = __importDefault(require("../../../../pm2/start"));
const restart_1 = __importDefault(require("../../../../pm2/restart"));
const stop_1 = __importDefault(require("../../../../pm2/stop"));
const pm2_routes = (0, express_1.Router)();
// List all proccess
pm2_routes.get("/list", async (req, res) => {
    const proccess = await (0, list_1.default)();
    return res.json(proccess);
});
// Start proccess
pm2_routes.post("/start/:id", async (req, res) => {
    const { id } = req.params;
    const result = await (0, start_1.default)(Number(id));
    return res.json({ result });
});
// Stop proccess
pm2_routes.post("/stop/:id", async (req, res) => {
    const { id } = req.params;
    const result = await (0, stop_1.default)(Number(id));
    return res.json({ result });
});
// Restart proccess
pm2_routes.post("/restart/:id", async (req, res) => {
    const { id } = req.params;
    const result = await (0, restart_1.default)(Number(id));
    return res.json({ result });
});
exports.default = pm2_routes;
