"use client";

import { deleteWishList } from "@/actions/delete-wishlist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCurrentUSer } from "@/hooks/use-current-user";
import { addToCart } from "@/redux-store/slice/cart-slice";
import { Wishlists } from "@prisma/client";
import { Product } from "@prisma/client";
import { Plus, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export const WishListItem = ({ item }: any) => {
  const session = useCurrentUSer();
  const [qty, setQty] = useState(1);
  const initialState = {};
  const [state, actionWishList] = useFormState(
    deleteWishList.bind(null, item.products.id, session?.id as string),
    initialState
  );
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: any) => state.cart);
  const handleAddToCart = (product: any) => {
    let newQty = qty;
    const existingItem = cartItems.find((x: any) => x.id === product.id);
    if (existingItem) {
      if (existingItem.quantity <= 10) {
        newQty = existingItem.qty + 1;
      }
    }

    dispatch(addToCart({ ...product, qty: newQty }));
  };
  return (
    <div className="flex items-center justify-around p-2 border-b mb-2">
      <div className="flex items-center gap-x-1">
        <Image
          src={item.products.image}
          alt="product"
          width={80}
          height={80}
          className="object-cover"
          placeholder="blur"
        />
        <Badge className="bg-emerald-500">In stock</Badge>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <p>{item.products.name}</p>
        <p>
          {" "}
          <span className="text-xs text-muted-foreground">&yen;</span>
          <strong className="text-xl font-semibold">
            {item.products.price}
          </strong>
          <span className="text-xs text-muted-foreground">.00</span>{" "}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <form action={actionWishList} className="flex items-center justify-end">
          <Button size="sm" variant="secondary" className="">
            <Trash2Icon className="h-5 w-5" />
          </Button>
        </form>
        <Button
          onClick={() => handleAddToCart(item.products)}
          size="sm"
          className="flex items-center gap-x-1 bg-amber-500 border-none"
        >
          add to cart
          <Plus className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
