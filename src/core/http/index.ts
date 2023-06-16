import "express-async-errors";
import express from "express";
import cors from "cors";

// Routes
import pm2_routes from "./modules/pm2/routes";

const server = express();

// Handlers
server.use(express.json());
server.use(
  cors({
    origin: "*",
  })
);

// Endpoints
server.use("/pm2", pm2_routes);

server.listen(1000, () => {
  console.log("PM2 Agent is running on port 1000");
});
