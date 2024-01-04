"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

export const SignInForm = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const urlToGoBackToAfterLogin = searchParams.get("callbackUrl") as string;
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values, urlToGoBackToAfterLogin).then((data) => {
        if (data?.success) {
          setSuccess(data.success);
          form.reset();
          setTimeout(() => {
            setSuccess(undefined);
          }, 3000);
        }
        if (data?.error) {
          setError(data.error);
          setTimeout(() => {
            setError(undefined);
          }, 3000);
        }
      });
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2"
      >
        <h2 className="text-center text-xl font-bold">
          Welcome back to Handyladies
        </h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="johndoe@example.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="*********" type="password" />
              </FormControl>
              <Button size="sm" variant="link" asChild className="px-0 ">
                <Link
                  href="/auth/reset"
                  className="text-xs text-muted-foreground flex items-center gap-x-1"
                >
                  forgot password?
                </Link>
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button
          disabled={isPending}
          className="self-center"
          type="submit"
          size="sm"
        >
          Sign in
        </Button>

        <Button size="sm" variant="link" asChild className="px-0 ">
          <Link
            href="/signin"
            className="text-xs text-muted-foreground flex items-center gap-x-1"
          >
            Do not have an account?{" "}
            <span className="font-semibold">Sign up</span>
          </Link>
        </Button>
      </form>
    </Form>
  );
};
