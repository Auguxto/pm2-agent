import { Router } from "express";

import list from "../../../../pm2/list";
import start from "../../../../pm2/start";
import restart from "../../../../pm2/restart";
import stop from "../../../../pm2/stop";

const pm2_routes = Router();

// List all proccess
pm2_routes.get("/list", async (req, res) => {
  const proccess = await list();

  return res.json(proccess);
});

// Start proccess
pm2_routes.post("/start/:id", async (req, res) => {
  const { id } = req.params;

  const result = await start(Number(id));

  return res.json({ result });
});

// Stop proccess
pm2_routes.post("/stop/:id", async (req, res) => {
  const { id } = req.params;

  const result = await stop(Number(id));

  return res.json({ result });
});

// Restart proccess
pm2_routes.post("/restart/:id", async (req, res) => {
  const { id } = req.params;

  const result = await restart(Number(id));

  return res.json({ result });
});

export default pm2_routes;
