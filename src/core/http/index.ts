import "express-async-errors";
import express from "express";
import cors from "cors";

// Routes
import pm2_routes from "./modules/pm2/routes";

// Handlers
import errorHandler from "./middleware/error/handler";
import authHandler from "./middleware/auth/handler";

const server = express();

// Handlers
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());
server.use(authHandler);

// Endpoints
server.use("/pm2", pm2_routes);

server.use(errorHandler);

server.listen(1000, () => {
  console.log("PM2 Agent is running on port 1000");
});
