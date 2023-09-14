export type Product = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string[];
  userId: string;
  sold: boolean;
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

export type Mockuser = {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
};

