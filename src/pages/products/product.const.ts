import { ObjectId } from "bson";

export type TProduct = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id?: ObjectId | any;
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
};
