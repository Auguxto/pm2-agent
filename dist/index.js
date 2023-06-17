"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const config_file = node_path_1.default.join(__dirname, "..", ".env");
function generate_random_api_key() {
    const randomData = node_crypto_1.default.randomBytes(16);
    const hash = node_crypto_1.default.createHash("sha1").update(randomData).digest("hex");
    return hash;
}
node_fs_1.default.access(config_file, node_fs_1.default.constants.F_OK, async (err) => {
    if (err) {
        console.error("Server is not configured, generating config.");
        const api_key = generate_random_api_key();
        const config = `api_key=${api_key}`;
        node_fs_1.default.writeFile(config_file, config, async (err) => {
            if (err) {
                console.log("Error creating config file.", err);
            }
            else {
                console.log("Config file generated.");
                console.log(`Your secret api_key: ${api_key}`);
                console.log("Restart your server");
            }
        });
    }
    else {
        await Promise.resolve().then(() => __importStar(require("./core/http")));
    }
});
