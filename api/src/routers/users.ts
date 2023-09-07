import Router from "express";
import passport from "passport";

import {
  createUser,
  logInWithEmail,
  loginWithGoogle,
} from "../controllers/users";

const router = Router();

router.post("/register", createUser);
router.post("/login", logInWithEmail);
router.post(
  "/google-login",
  passport.authenticate("google-id-token", { session: false }),
  loginWithGoogle
);

export default router;
