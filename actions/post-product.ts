"use server";

import * as z from "zod";
import { PostNewProductSchema } from "@/schemas";
import { db } from "@/lib/db";

export async function postNewProduct(
  values: z.infer<typeof PostNewProductSchema>,
  imageUrl: string
) {
  const validatedValues = PostNewProductSchema.safeParse(values);
  if (!validatedValues.success) {
    return {
      error: "invalid fields",
    };
  }

  const { name, description, quantity, material, brand, price } =
    validatedValues.data;

  if (
    !name ||
    !description ||
    !quantity ||
    !material ||
    !brand ||
    !price ||
    !imageUrl
  ) {
    return {
      error: "invalid fields",
    };
  }

  try {
    await db.product.create({
      data: {
        name,
        material,
        brand,
        description,
        quantity: parseInt(quantity),
        price: parseInt(price),
        image: imageUrl,
      },
    });
    return {
      success: "product successfully posted",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else {
      return {
        error: "Something went wrong",
      };
    }
  }
}
