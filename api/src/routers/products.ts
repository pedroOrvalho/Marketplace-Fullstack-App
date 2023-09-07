 import Router from 'express'
 import passport from "passport"
 
import { CreateAllProducts, deleteProduct, getAllproductByUserId, getAllproducts, getProductDetails, updateProduct } from '../controllers/products'

 const router=Router()

 router.post(
   "/:_id",
   passport.authenticate("jwt", { session: false }),
   CreateAllProducts
 );
 router.get("/:userId", passport.authenticate("jwt", {session:false}) ,getAllproductByUserId)
 router.get("/:productId", getProductDetails);
 router.get("/", getAllproducts)
 router.put("/:productId", passport.authenticate("jwt", {session:false}),updateProduct)
 router.delete("/:productId",passport.authenticate("jwt", {session:false}), deleteProduct)


 export default router