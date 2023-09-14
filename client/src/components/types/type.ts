
 export type Product = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string;
};


export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  enum: string;
  email: string;
  password: string;
  banned: boolean;
};


export type Favorite = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  material: string[];
  color: string;
  image: string[];
  quantity: number;
};