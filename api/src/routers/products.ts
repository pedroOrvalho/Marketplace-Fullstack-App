import Router from "express";
import passport from "passport";

import {
  createProduct,
  getAllProductByUserId,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products";

const router = Router();

router.post("/:_id",passport.authenticate("jwt", { session: false }), createProduct);
router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.get("/user/:userId",passport.authenticate("jwt", { session: false }), getAllProductByUserId);
router.put("/:productId",passport.authenticate("jwt", { session: false }),updateProductById);
router.delete("/:productId",passport.authenticate("jwt", { session: false }),deleteProductById);

export default router;
