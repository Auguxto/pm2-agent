"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Routes
const routes_1 = __importDefault(require("./modules/pm2/routes"));
// Handlers
const handler_1 = __importDefault(require("./middleware/error/handler"));
const handler_2 = __importDefault(require("./middleware/auth/handler"));
const server = (0, express_1.default)();
// Handlers
server.use((0, cors_1.default)({
    origin: "*",
}));
server.use(express_1.default.json());
server.use(handler_2.default);
// Endpoints
server.use("/pm2", routes_1.default);
server.use(handler_1.default);
server.listen(1000, () => {
    console.log("PM2 Agent is running on port 1000");
});
