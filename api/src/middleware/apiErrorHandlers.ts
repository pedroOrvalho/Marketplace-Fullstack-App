import { Response, Request, NextFunction } from "express";

import ApiError from "../helpers/apiErrors";

export default function (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(error.statusCode).json({
    status: error,
    statuscode: error.statusCode,
    message: error.message,
  });
}
