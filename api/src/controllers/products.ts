import { NextFunction, Request, Response } from "express";
import ProductModel from "../model/Products";
import {
  createProductService,
  getProductsByUserId,
  getProductService,
  getProductDetailsService,
  updateProductservice,
  deleteProductService
} from "../services/products";

export const CreateAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, category, price, image } = req.body;

    const newProduct = new ProductModel({
      title,
      description,
      category,
      price,
      
      image,
      userId: req.params._id, // Associate the product with the user by their ID
    });

    const product = await createProductService(newProduct);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getProductService();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getAllProductByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    const productById = await getProductsByUserId(userId);
    res.status(200).json(productById);
  } catch (error) {
    next(error);
  }
};

export const getProductDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const productById = await getProductDetailsService(productId);
    res.status(200).json(productById);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const updateInfo = req.body;

    const product = await updateProductservice(productId, updateInfo);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const productDeleted = await deleteProductService(productId);
    res.status(200).json(productDeleted);
  } catch (error) {
    next(error);
  }
};
