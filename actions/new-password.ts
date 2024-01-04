"use server";

import bcrypt from "bcryptjs";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { AuthError } from "next-auth";

export async function newPassword(
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) {
  try {
    const validatedFields = NewPasswordSchema.safeParse(values);
    if (!validatedFields) {
      return {
        error: "Invalid fields or password",
      };
    }

    if (!token) {
      return {
        error: "missing token from the browser",
      };
    }
    if (validatedFields.success) {
      const { password } = validatedFields.data;
      const existingToken = await getPasswordResetTokenByToken(token);
      if (!existingToken) {
        return {
          error: "Missing token",
        };
      }

      const hasExpired = new Date(existingToken.expires) < new Date();
      if (hasExpired) {
        return {
          error: "Expired token",
        };
      }

      const existingUser = await getUserByEmail(existingToken.email);
      if (!existingUser) {
        return {
          error: "No user found",
        };
      }

      const hashPassword = bcrypt.hashSync(password, 10);

      await db.user.update({
        where: {
          id: existingUser.id,
        },
        data: {
          password: hashPassword,
        },
      });

      await db.passwordResetToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    return {
      success: "password updated",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }

    if (error instanceof AuthError) {
      return {
        error: error.message,
      };
    }
  }
}
