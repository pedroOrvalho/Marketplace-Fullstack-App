import { NotFoundError } from "../helpers/apiErrors";
import Products, { ProductDocument } from "../model/Products";


export const createProductService=async (products:ProductDocument):Promise<ProductDocument>=>{

    return products.save()

}

export const getProductService =async():Promise<ProductDocument[]>=>{
   return await Products.find()
}

export const getProductByUserId=async(userId:string):Promise<ProductDocument[]>=>{

const foundUserId= await Products.find({userId:userId})
if(!foundUserId){
    throw new NotFoundError(`product with user ${userId} not found`)

}
return foundUserId

}