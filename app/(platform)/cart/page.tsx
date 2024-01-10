"use client";

import { MoonLoader } from "react-spinners";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import CartListItem from "./_components/cart-list-item";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/redux-store/slice/cart-slice";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function CartPage() {
  const dispatch = useDispatch(); //use for test only
  const { cartItems, loading } = useSelector((state: any) => state.cart);
  let cartState;
  if (loading) {
    cartState = (
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center">
        <MoonLoader color="#0ea5e9" />
      </div>
    );
  } else {
    cartState = (
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center">
        {cartItems.length === 0 ? (
          <div className="bg-white w-[30rem] h-[10rem] flex items-center justify-center">
            <Button size="sm" variant="secondary" className="group" asChild>
              <Link
                href="/product"
                className="flex items-center gap-x-1 group-hover:font-bold group-hover:translate-x-1 transition"
              >
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                Go Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <Table className="bg-white w-[60%] mx-auto">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product Photo</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-left">Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((product: any) => (
                <CartListItem key={product.id} product={product} />
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    );
  }
  return cartState;
}

export default CartPage;

// <TableRow>
// <TableCell className="font-medium">INV001</TableCell>
// <TableCell>Paid</TableCell>
// <TableCell>Credit Card</TableCell>
// <TableCell className="text-right">$250.00</TableCell>
// </TableRow>
// <Button onClick={() => dispatch(clearCart())}>Temporal clear</Button>
{
  /* <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center">
    <Table className="bg-white w-[60%] mx-auto">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product Photo</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-left">Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((product: any) => (
          <CartListItem key={product.id} product={product} />
        ))}
      </TableBody>
    </Table>
  </div> */
}
