"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { CommentSchema } from "@/schemas";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUSer } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { createComment } from "@/actions/comments";

export const CommentForm = ({
  showComment,
  handleShowCommentForm,
  productId,
}: any) => {
  const user = useCurrentUSer();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CommentSchema>>({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CommentSchema>) => {
    startTransition(() => {
      createComment(values, user?.id as string, productId)
        .then((data) => {
          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
            setTimeout(() => {
              setSuccess(undefined);
            }, 2000);
          }
          if (data?.error) {
            setError(data.error);
            setTimeout(() => {
              setError(undefined);
            }, 2000);
          }
        })
        .catch((err) => setError(err));
    });
  };

  return (
    <Form {...form}>
      <Button
        className="mt-10"
        onClick={handleShowCommentForm}
        size="sm"
        variant="outline"
      >
        Leave a review
      </Button>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "flex gap-y-2 px-4 opacity-0 translate-y-0 ",
          showComment &&
            "opacity-100 translate-y-5 transition-all duration-500 ease-in-out"
        )}
      >
        <div className="flex items-center gap-1 pl-4">
          <Avatar className="">
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground font-semibold">{user?.name}</p>
        </div>
        <div className=" flex flex-col mt-[6.5rem] mr-10 w-full  gap-y-2">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="leave a review 😗"
                    type="text"
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
            className="self-center flex items-center gap-x-1 group"
            type="submit"
            size="sm"
          >
            review
            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition group-hover:text-amber-500" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
