"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
} from "@/redux-store/slice/cart-slice";
import { Minus, Plus, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function CartListItem({ product }: any) {
  const { itemQuantity } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const handleDeleteHandler = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };
  const increaseCartItemHandler = (id: string) => {
    dispatch(increaseCartItem(id));
  };
  const decreaseCartItemHandler = (id: string) => {
    dispatch(decreaseCartItem(id));
  };
  let renderProduct;
  if (product?.qty > 0) {
    renderProduct = (
      <div className="flex items-center justify-around mb-2 border-b ">
        <div className="font-medium">
          {
            <Link href={`/product/bagdetails/${product.id}`}>
              <Image
                src={product?.image}
                alt={product?.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </Link>
          }
        </div>
        <p className="hidden md:hidden  lg:flex flex-col items-center gap-y-2">
          {" "}
          <span className="text-muted-foreground">Product name</span>{" "}
          <span>{product?.name}</span>
        </p>
        <p className=" hidden md:flex lg:flex flex-col gap-y-2 items-center">
          <span className="text-muted-foreground">Product Brand</span>
          <span>{product?.brand}</span>
        </p>
        <div>
          <div className="flex items-center gap-1">
            <Button
              disabled={itemQuantity === 0}
              onClick={() => decreaseCartItemHandler(product?.id)}
              variant="outline"
              size="sm"
            >
              <Minus className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => increaseCartItemHandler(product?.id)}
              variant="outline"
              size="sm"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="hidden md:hidden  lg:flex flex-col gap-y-2 items-center ">
          <p className="text-muted-foreground">Product Price</p>
          <p>
            {" "}
            <span className="text-xs text-muted-foreground">&yen;</span>
            <strong className="text-xl font-semibold">{product?.price}</strong>
            <span className="text-xs text-muted-foreground">.00</span>{" "}
          </p>
        </div>
        <p className="flex flex-col gap-y-2 items-center">
          <span className="text-muted-foreground">Quantity</span>
          <span>{product?.qty > 0 ? product?.qty : null}</span>
        </p>
        <div className="hidden  lg:flex flex-col gap-y-2 items-center">
          <p className="text-muted-foreground">Remove</p>
          <Button
            onClick={() => handleDeleteHandler(product.id)}
            size="sm"
            variant="ghost"
          >
            <Trash2Icon className="h-4 w-4 text-rose-400" />
          </Button>
        </div>
      </div>
    );
  } else if (product?.qty === 0) {
    renderProduct = null;
  }
  return renderProduct;
}
