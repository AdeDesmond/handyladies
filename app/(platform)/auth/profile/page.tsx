"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRightFromCircle, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";

function ProfilePage() {
  const user = useSession();
  const [selected, setSelected] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const handleSelectedViews = (option: string) => {
    setSelected(option);
  };
  const form = useForm();
  return (
    <div
      className={cn(
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex justify-center pt-28"
      )}
    >
      <div className="w-[80%] bg-white h-full">
        <div className="w-full h-[15rem] relative">
          <Image
            src="/back4.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-4 p-4 ">
          <div className="basis-[25%] bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-[6rem] h-[6rem] bg-white rounded-lg border flex items-center justify-center mb-2">
              <ImageIcon className="h-6 w-6" />
            </div>
            <p>{user.data?.user.name}</p>
            <p>
              Role: <span>{user.data?.user.role}</span>{" "}
            </p>
            <Separator className="w-full mb-2 mt-2" />
            <div>
              online status: <Badge variant="primary">Online</Badge>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-md h-[20rem] rounded-lg p-3">
            <div className="w-full h-14 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 flex items-center justify-center gap-x-4 rounded-tr-lg rounded-tl-lg">
              <Button
                onClick={() => handleSelectedViews("update")}
                variant="outline"
                size="sm"
                className={cn(
                  selected === "update"
                    ? "bg-amber-600 border-none hover:bg-amber-400 text-white"
                    : null
                )}
              >
                Update
              </Button>
              <Button
                onClick={() => handleSelectedViews("post")}
                variant="outline"
                size="sm"
                className={cn(
                  selected === "post"
                    ? "bg-amber-600 border-none hover:bg-amber-400 text-white"
                    : null
                )}
              >
                New Product
              </Button>
            </div>
            {selected === "update" && (
              <div className="w-full h-full overflow-hidden flex items-center p-4 flex-col ">
                <h2 className="text-center text-xl font-bold ">
                  Update your profile details
                </h2>
                <Form {...form}>
                  <form className="flex items-center gap-x-1 justify-center ">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="johndoe"
                              type="text"
                            />
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
                            <Input
                              {...field}
                              placeholder="*********"
                              type="password"
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
                      className=" group hover:scale-105 hover:shadow-lg focus:scale-95 focus:shadow-md transition-all duration-200 ease-in-out flex items-center gap-x-1 mt-8"
                      type="submit"
                      size="sm"
                    >
                      update
                      <ArrowUpRightFromCircle className="h-5 w-5 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-150" />
                    </Button>
                  </form>
                </Form>
              </div>
            )}
            {selected === "post" && (
              <div className="flex items-center w-full h-full flex-col gap-y-2 pt-10">
                <h2 className="font-semibold text-xl">
                  Post Brand New Hand Bags
                </h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/product/new-product">new product</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
