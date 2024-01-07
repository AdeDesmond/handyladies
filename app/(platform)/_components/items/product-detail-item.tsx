"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/use-cart-product";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";

interface ProductDetailItemProps {
  id: string;
  price: number;
  name: string;
  material: string;
}

export const ProductDetailItem = ({
  id,
  price,
  name,
  material,
}: ProductDetailItemProps) => {
  const addCartItems = useCartStore((state) => state.addToCart);
  return (
    <div
      className={cn(
        "w-[150px] bg-white bg-opacity-75 absolute hidden group-hover:block transition bottom-0 left-0 pricetag hover:bg-white cursor-pointer overflow-hidden p-1 "
      )}
    >
      <div className="flex items-center justify-between px-2">
        <div>
          <h2 className="text-xl font-bold w-[20px]">{name}</h2>
          <p className="text-sm text-muted-foreground w-[6rem]">{material}</p>
          <p>
            {" "}
            <span className="text-xs text-muted-foreground">&yen;</span>
            <strong className="text-xl font-semibold">{price}</strong>
            <span className="text-xs text-muted-foreground">.00</span>{" "}
          </p>
        </div>
        <Button
          className="h-8 w-8 rounded-full hover:scale-105 group"
          size="sm"
          onClick={() => addCartItems(id)}
        >
          <ShoppingCartIcon className="w-6 h-6 group-hover:scale-105 group-hover:text-amber-500 " />
        </Button>
      </div>
    </div>
  );
};
