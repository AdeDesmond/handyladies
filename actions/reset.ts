"use server";

import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetToken } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import * as z from "zod";

export async function reset(values: z.infer<typeof ResetSchema>) {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "invalid field or email",
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      error: "Email not found",
    };
  }

  const passwordResetToken = await generatePasswordResetToken(
    existingUser.email as string
  );

  await sendPasswordResetToken(
    passwordResetToken.email,
    "Reset your password",
    passwordResetToken.token
  );

  return {
    success: "Password reset email sent",
  };
}
