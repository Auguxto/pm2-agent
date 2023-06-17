import { config } from "dotenv";
config();

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const config_file = path.join(__dirname, "..", ".env");

function generate_random_api_key(): string {
  const randomData = crypto.randomBytes(16);
  const hash = crypto.createHash("sha1").update(randomData).digest("hex");
  return hash;
}

fs.access(config_file, fs.constants.F_OK, async (err) => {
  if (err) {
    console.error("Server is not configured, generating config.");

    const api_key = generate_random_api_key();
    const config = `api_key=${api_key}`;

    fs.writeFile(config_file, config, async (err) => {
      if (err) {
        console.log("Error creating config file.", err);
      } else {
        console.log("Config file generated.");
        console.log(`Your secret api_key: ${api_key}`);
        console.log("Restart your server");
      }
    });
  } else {
    await import("./core/http");
  }
});
