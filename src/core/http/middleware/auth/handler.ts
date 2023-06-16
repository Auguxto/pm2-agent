import { NextFunction, Request, Response } from "express";

import AppError from "../error/AppError";

function authHandler(request: Request, response: Response, next: NextFunction) {
  const api_key = request.headers["authorization"];

  const api_secret_key = process.env.api_key;

  if (!api_key || api_key !== api_secret_key) {
    throw new AppError("Unauthorized", 401);
  }

  next();
}

export default authHandler;
