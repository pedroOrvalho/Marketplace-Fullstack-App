import { Response, Request } from "express";
import ApiError from "../helpers/apiErrors";

export default function (error: ApiError, req: Request, res: Response) {
  res.status(error.statusCode).json({
    status: error,
    statuscode: error.statusCode,
    message: error.message,
  });
}
