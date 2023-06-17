"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../error/AppError"));
function errorHandler(error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
}
exports.default = errorHandler;
