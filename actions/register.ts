"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateEmailVerificationToken } from "@/lib/tokens";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { username, email, password } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "email already in used",
    };
  }

  await db.user.create({
    data: {
      name: username,
      email,
      password: hashPassword,
    },
  });
  /**
   * Generate the verifivcation token with the email register with by the user
   * @function
   */
  const verificationToken = await generateEmailVerificationToken(email);
  //await sendVerificationToken(verificationToken.email, verificationToken.token);
  /**
   * Send the confirmation email to the user so that they can click and then we can confirm the token
   * @function
   */
  await sendVerificationEmail(
    verificationToken.email,
    "Confirm your email",
    verificationToken.token
  );
  return {
    success: "Confirmation email sent",
  };
}
