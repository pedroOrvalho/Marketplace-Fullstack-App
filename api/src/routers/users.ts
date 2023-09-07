import Router from "express";
import passport from "passport"

import { createUser, deleteUser, logInWithEmail, updateUserInfo } from "../controllers/users";

const router = Router();

router.post("/register", createUser);
router.post(
  "/login",
  
  logInWithEmail
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
