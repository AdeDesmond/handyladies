import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(1, { message: "password must be at least more than 1 character" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "your email is not valid" }),
  password: z
    .string()
    .min(6, { message: "password must be at least more than 6 character" }),
  username: z.string().min(1, { message: "name is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: " You email is not valid" }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "password must be at least more than 6 character" }),
});

export const PostNewProductSchema = z.object({
  name: z
    .string()
    .min(2, { message: "product name must be longer than two characters" }),
  description: z.string().min(10, {
    message: "please provide a better description for the product",
  }),
  brand: z.string(),
  quantity: z.string(),
  price: z.string(),
  material: z.string(),
});
