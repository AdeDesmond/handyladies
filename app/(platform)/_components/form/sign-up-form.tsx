"use client";
import { RegisterSchema } from "@/schemas";
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
import { useState, useTransition } from "react";
import { ArrowUpRightFromCircle } from "lucide-react";
import { register } from "@/actions/register";

export const SignUpForm = () => {
  //i might change the useTransition depending on the behaviour
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    startTransition(() => {
      register(values).then((data) => {
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2"
      >
        <h2 className="text-center text-xl font-bold ">
          Join the HandyLadies community
        </h2>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="johndoe" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  href="/signin"
                  className="text-xs text-muted-foreground flex items-center gap-x-1"
                >
                  already have an account?{" "}
                  <span className="font-semibold">login</span>
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
          className="self-center group hover:scale-105 hover:shadow-lg focus:scale-95 focus:shadow-md transition-all duration-200 ease-in-out flex items-center gap-x-1"
          type="submit"
          size="sm"
        >
          Sign up
          <ArrowUpRightFromCircle className="h-5 w-5 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-150" />
        </Button>
      </form>
    </Form>
  );
};
