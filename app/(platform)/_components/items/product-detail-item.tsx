"use client";

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { addToCart } from "@/redux-store/slice/cart-slice";

interface ProductDetailItemProps {
  id: string;
  item: any;
  price: number;
  name: string;
  material: string;
}

export const ProductDetailItem = ({
  id,
  item,
  price,
  name,
  material,
}: ProductDetailItemProps) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => state.cart);
  let newQty = qty;
  const handleAddItemsToCart = (product: any) => {
    const existingProduct = cartProducts.cartItems.find(
      (x: any) => x.id === product.id
    );
    if (existingProduct) {
      if (existingProduct.quantity <= 10) {
        newQty = existingProduct.qty + 1;
      } else {
        alert("out of stock");
      }
    }

    dispatch(addToCart({ ...product, qty: newQty }));
  };
  return (
    <div
      className={cn(
        "w-[150px] bg-white bg-opacity-75 absolute hidden group-hover:block  bottom-0 left-0 pricetag hover:bg-white cursor-pointer overflow-hidden p-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out "
      )}
    >
      <div className="flex items-center justify-between px-2 ">
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
          onClick={() => handleAddItemsToCart(item)}
        >
          <ShoppingCartIcon className="w-6 h-6 group-hover:scale-105 group-hover:text-amber-500 " />
        </Button>
      </div>
    </div>
  );
};
