"use client";
import { MoonLoader } from "react-spinners";
import { PostNewProductSchema } from "@/schemas";
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
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  useState,
  useTransition,
  ChangeEvent,
  useRef,
  ElementRef,
} from "react";
import { ArrowUpRightFromCircle, ImageIcon } from "lucide-react";
import { postNewProduct } from "@/actions/post-product";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/actions/upload-product-image";

export const PostNewProduct = () => {
  //i might change the useTransition depending on the behaviour
  const [isPending, startTransition] = useTransition();
  const [isUploading, startUploading] = useTransition();
  const [image, setImage] = useState<string[] | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const form = useForm<z.infer<typeof PostNewProductSchema>>({
    resolver: zodResolver(PostNewProductSchema),
    defaultValues: {
      name: "",
      brand: "",
      price: "",
      quantity: "",
      description: "",
      material: "",
    },
  });
  //console.log(image);
  function onSubmit(values: z.infer<typeof PostNewProductSchema>) {
    startTransition(() => {
      if (image?.length) {
        postNewProduct(values, image[0]).then((data) => {
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
      }
    });
  }

  const uploadProductImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = e.target.files;
    if (!imageFiles) return;
    const imageFormData = new FormData();
    if (imageFiles) {
      for (let file = 0; file < imageFiles.length; file++) {
        imageFormData.append("file", imageFiles[file]);
      }
      startUploading(() => {
        uploadImage(imageFormData).then((data) => {
          setImage(data?.photos);
        });
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 bg-white w-[60%] p-4 rounded-lg"
      >
        <h2 className="text-center text-xl font-bold ">
          Post a new bag on handyladies
        </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="bag name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input {...field} placeholder="kors" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Material</FormLabel>
              <FormControl>
                <Input {...field} placeholder="leather" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input {...field} placeholder="price" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock Quantity</FormLabel>
              <FormControl>
                <Input {...field} placeholder="quantity" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="describe your bag" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-x-2">
          <div className="w-[5rem] h-[5rem] rounded-lg border flex items-center justify-center ">
            <label htmlFor="file" className="cursor-pointer">
              <ImageIcon className="h-8 w-8 text-muted-foreground " />
            </label>
            <input
              type="file"
              onChange={uploadProductImage}
              name="file"
              id="file"
              multiple
              className="hidden"
            />
          </div>
          <div>
            {isUploading ? (
              <MoonLoader color="#0f172a" />
            ) : (
              image &&
              image.map((img) => (
                <Image
                  src={img}
                  alt="bag"
                  key={img}
                  height={80}
                  width={80}
                  className="object-cover rounded-lg shadow-md"
                />
              ))
            )}
          </div>
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button
          disabled={isPending}
          className="self-center group hover:scale-105 hover:shadow-lg focus:scale-95 focus:shadow-md transition-all duration-200 ease-in-out flex items-center gap-x-1"
          type="submit"
          size="sm"
        >
          Create bag product
          <ArrowUpRightFromCircle className="h-5 w-5 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-150" />
        </Button>
      </form>
    </Form>
  );
};
