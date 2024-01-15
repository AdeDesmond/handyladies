"use server";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { revalidatePath } from "next/cache";

export async function deleteWishList(productId: string, userId: string) {
  const session = await getCurrentUser();
  if (!session?.user || !session) {
    return {
      error: "Unathorized",
    };
  }
  let updatewishlist;
  try {
    updatewishlist = await db.wishlists.delete({
      where: {
        productId_userId: {
          productId,
          userId,
        },
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "Something went wrong",
      };
    }
  }
  revalidatePath("/wishlist");
}
