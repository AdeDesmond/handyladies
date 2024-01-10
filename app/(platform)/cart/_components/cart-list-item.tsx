"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { deleteCartItem } from "@/redux-store/slice/cart-slice";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function CartListItem({ product }: any) {
  const dispatch = useDispatch();
  const handleDeleteHandler = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };
  let renderProduct;
  if (product?.qty > 0) {
    renderProduct = (
      <TableRow>
        <TableCell className="font-medium">
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
        </TableCell>
        <TableCell>{product?.name}</TableCell>
        <TableCell>{product?.brand}</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">
          <p>
            {" "}
            <span className="text-xs text-muted-foreground">&yen;</span>
            <strong className="text-xl font-semibold">{product?.price}</strong>
            <span className="text-xs text-muted-foreground">.00</span>{" "}
          </p>
        </TableCell>
        <TableCell>{product?.qty > 0 ? product?.qty : null}</TableCell>
        <TableCell>
          <Button
            onClick={() => handleDeleteHandler(product.id)}
            size="sm"
            variant="ghost"
          >
            <Trash2Icon className="h-4 w-4 text-rose-400" />
          </Button>
        </TableCell>
      </TableRow>
    );
  } else if (product?.qty === 0) {
    renderProduct = null;
  }
  return renderProduct;
}
