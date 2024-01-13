"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function wishList({ productId, userId }: any) {
  if (!productId || !userId) {
    return {
      error: "Invalid data or unthorised",
    };
  }

  let wishlist;

  try {
    wishlist = await db.wishlists.create({
      data: {
        productId,
        userId,
      },
    });
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        isWishListed: true,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "something went wrong",
      };
    }
  }

  revalidatePath(`/product/bagdetails/${productId}`);
}
