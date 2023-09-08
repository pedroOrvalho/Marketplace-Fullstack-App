import Router from "express";
import passport from "passport";

import {
  createUser,
  logInWithEmail,
  loginWithGoogle,
  updateUserInfo,
  deleteUser
} from "../controllers/users";

const router = Router();

router.post("/register", createUser);

router.post("/login", logInWithEmail);

router.post(
  "/google-login",
  passport.authenticate("google-id-token", { session: false }),
  loginWithGoogle
);

router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteUser
);

export default router;
