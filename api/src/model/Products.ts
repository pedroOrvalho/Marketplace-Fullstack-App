import mongoose, { Document } from "mongoose";
export type ProductDocument = Document & {
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
  userId: mongoose.Types.ObjectId; // Reference to the User who added this product
};
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: [String],
  },
  color: {
    type: String,
  },
  image: {
    type: [String],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Reference to the User model
    required: true,
  },
});
export default mongoose.model<ProductDocument>('Products', ProductSchema);