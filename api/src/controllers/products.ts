import { NextFunction, Request, Response } from "express";
import ProductModel from "../model/Products";
import {
  createProductService,
  getAllProductsByUserIdService,
  getAllProductstService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService
} from "../services/products";

export const createProduct = async (
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
    const products = await getAllProductstService();

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
    const productById = await getAllProductsByUserIdService(userId);
    res.status(200).json(productById);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const productById = await getProductByIdService(productId);
    res.status(200).json(productById);
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const updateInfo = req.body;

    const product = await updateProductByIdService(productId, updateInfo);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const productDeleted = await deleteProductByIdService(productId);
    res.status(200).json(productDeleted);
  } catch (error) {
    next(error);
  }
};
