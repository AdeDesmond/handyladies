"use client";
import { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSearchParams } from "next/navigation";
import { NewPasswordSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { newPassword } from "@/actions/new-password";

export const NewPasswordForm = () => {
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const urlToken = searchParams.get("token") as string;
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, urlToken).then((data) => {
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
            setSuccess(undefined);
          }, 3000);
        }
      });
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    {...field}
                    placeholder="*************"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button disabled={isPending} type="submit" className="w-full" size="sm">
          Reset your password
        </Button>
      </form>
    </Form>
  );
};
