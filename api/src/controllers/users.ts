import { Request, Response, NextFunction } from "express";
import Users from "../model/User";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { CreateUserService } from "../services/users";
dotenv.config();

export const createAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt); */
    const { firstName, lastName, email } = req.body;
    const users = new Users({
      firstName,
      lastName,
      email,
    
    });

    const newUser = await CreateUserService(users);
    res.status(200).json(newUser);
  } catch (error) {
    next(error)
  }
};
