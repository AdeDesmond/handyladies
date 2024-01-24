"use client";

import { usePathname } from "next/navigation";
import { ShowProductItem } from "./items/show-product-item";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Footer } from "./footer";

interface ShowProductsProps {
  products: Product[];
}

export const ShowProduct = ({ products }: ShowProductsProps) => {
  const pathName = usePathname();
  const renderedBags = products.map((item) => (
    <ShowProductItem key={item.name} item={item} />
  ));
  return (
    <div
      className={cn(
        " grid-cols-1 md:grid-cols-2 w-[400px] md:w-[800px] md:left-[3rem] lg:left-[8.5rem] gap-y-4  lg:w-[1200px] bg-white absolute md:top-[28rem] lg:top-[28rem]  z-1000  p-4",
        pathName === "/product" && "lg:top-[6rem] md:top-[6rem]"
      )}
    >
      <div className="w-full lg:left-[10rem] grid md:grid-cols-2 lg:grid-cols-3 min-h-screen place-items-center gap-3 ">
        {renderedBags}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};
