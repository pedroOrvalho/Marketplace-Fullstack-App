 import Router from 'express'
import { CreateAllProducts, getAllproductByUserId, getAllproducts } from '../controllers/products'

 const router=Router()

 router.post("/:_id", CreateAllProducts)
 router.get("/:userId", getAllproductByUserId)
 router.get("/", getAllproducts)


 export default router