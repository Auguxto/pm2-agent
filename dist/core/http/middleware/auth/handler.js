"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../error/AppError"));
function authHandler(request, response, next) {
    const api_key = request.headers["authorization"];
    const api_secret_key = process.env.api_key;
    if (!api_key || api_key !== api_secret_key) {
        throw new AppError_1.default("Unauthorized", 401);
    }
    next();
}
exports.default = authHandler;
