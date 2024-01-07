import { db } from "@/lib/db";
import { Product } from "@prisma/client";

export type ProductProps = Product[];

export const fetchAllProducts = async (): Promise<ProductProps> => {
  return await db.product.findMany();
};
