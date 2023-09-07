import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import Users, { UserDocument } from "../model/User";
import { createUserService, findUserByEmailService } from "../services/users";
import { UnauthorizedError } from "../helpers/apiErrors";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Users({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const newUser = await createUserService(user);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const logInWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await findUserByEmailService(req.body.email);
    if (userData) {
      const databaseHashedPassword = userData.password;
      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        databaseHashedPassword
      );

      if (!isCorrectPassword) {
        throw new UnauthorizedError("Password is incorrect.");
      }
      const token = jwt.sign(
        {
          email: userData.email,
          _id: userData._id,
          firstName: userData.firstName,
          lastName: userData.lastName,
        },
        JWT_SECRET,
        {
          expiresIn: "30m",
        }
      );
      res.json({ userData, token });
    } else {
      res.status(403).json({
        message: "You don't have an account yet, please register first.",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const loginWithGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // how you can access the value from passport
    // foundUser
    // console.log(req, "request");
    // request.body
    const userData = req.user as UserDocument;
    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    if (!userData) {
      res.json({ message: "can't find user with this email" });
      return;
    } else {
      res.json({ token, userData });
    }
  } catch (error) {
    next(error);
  }
};