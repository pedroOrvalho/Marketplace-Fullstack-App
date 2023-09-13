import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  description: string;
  category: string;
  price: number;
  image: string[];
  userId: mongoose.Types.ObjectId;
  sold: boolean;
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
  image: {
    type: [String],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  sold: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<ProductDocument>("Products", ProductSchema);
