"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas/index";
import { getUserByEmail } from "@/data/user";
import { generateEmailVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export async function login(
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "user does not exist or the password is wrong",
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateEmailVerificationToken(
      existingUser.email
    );

    const emailType = "Confirm your email";

    await sendVerificationEmail(
      verificationToken.email,
      emailType,
      verificationToken.token
    );

    return {
      success: "email confirmation sent",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "invalid credentials" };
        default:
          return { error: " something went wrong" };
      }
    }
    throw error;
  }
}
