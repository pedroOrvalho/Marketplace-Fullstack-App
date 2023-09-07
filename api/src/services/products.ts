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

export const getProductDetailsService = async (
  productId: string
): Promise<ProductDocument> => {
  const foundUserId = await Products.findById(productId);
  if (!foundUserId) {
    throw new NotFoundError(`product with user ${productId} not found`);
  }
  return foundUserId;
};

export const updateProductservice=async(productId:string,
   updateInfo:Partial<ProductDocument> )=>{
    const foundUpdate = await Products.findByIdAndUpdate(
      productId,
      updateInfo,
      { new: true }
    );

    if(!foundUpdate){
        throw new NotFoundError(`product with ${productId} not found`)
    }

    return foundUpdate

}

export const deleteProductService=async(productId:string):Promise<ProductDocument>=>{

    const foundedproduct= await Products.findByIdAndDelete(productId)
    if(!foundedproduct){
        throw new NotFoundError(`product with id ${productId} not found`)
    }
    return foundedproduct

}