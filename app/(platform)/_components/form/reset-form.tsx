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
import { useForm } from "react-hook-form";
import { ResetSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { reset } from "@/actions/reset";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    startTransition(() => {
      reset(values).then((data) => {
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
        <h2 className="text-center text-xl font-bold">Reset Your Password</h2>
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
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button
          disabled={isPending}
          className="self-center"
          type="submit"
          size="sm"
        >
          Reset your password
        </Button>
      </form>
    </Form>
  );
};
