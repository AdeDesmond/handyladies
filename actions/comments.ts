"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { CommentSchema } from "@/schemas";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { revalidatePath } from "next/cache";

export async function createComment(
  values: z.infer<typeof CommentSchema>,
  userId: string,
  productId: string
) {
  const session = await getCurrentUser();
  if (!session?.user || !session) {
    return {
      error: "Unathorised, please login to comment or review",
    };
  }
  const validatedFields = CommentSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "invalid fields, please make sure to leave a sincere review",
    };
  }

  const { comment } = validatedFields.data;

  let review;
  try {
    review = await db.comments.create({
      data: {
        content: comment,
        userId,
        productId,
      },
    });
    if (review) {
      return {
        success: "comment posted",
      };
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "something went wrong with the creation of your comment",
      };
    }
  }

  revalidatePath(`/product/bagdetails/${productId}`);
}
