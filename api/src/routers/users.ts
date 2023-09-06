import Router from "express";
import { createUser, logInWithEmail } from "../controllers/users";

const router = Router();

router.post("/register", createUser);
router.post("/login", logInWithEmail)

export default router;
