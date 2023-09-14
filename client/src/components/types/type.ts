
 export type Product = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: string;

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