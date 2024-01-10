"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export const StoreNav = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  return (
    <div className="flex items-center justify-center gap-x-1 text-slate-200 flex-col gap-y-3 lg:flex-row">
      <Button size="sm" asChild>
        <Link
          href="/product"
          className="text-sm text-muted-foreground text-slate-400"
        >
          Product
        </Link>
      </Button>

      <Button asChild>
        <Link
          href="/product"
          className="text-sm text-muted-foreground text-slate-400"
        >
          New Arrivals
        </Link>
      </Button>

      <Button asChild>
        <Link
          href="/product"
          className="text-sm text-muted-foreground text-slate-400"
        >
          About Us
        </Link>
      </Button>

      <Button asChild>
        <Link
          href="/cart"
          className="text-sm text-muted-foreground flex items-center gap-x-1 text-slate-400 relative"
        >
          {cartItems.length <= 0 ? null : (
            <div className="absolute top-1 right-10 h-4 w-4 rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs  border border-amber-600 text-white">
              {cartItems.length > 0
                ? cartItems.reduce((acc: any, item: any) => acc + item.qty, 0)
                : null}
            </div>
          )}
          <ShoppingCartIcon className="h-5 w-5 text-amber-500" />
          Cart
        </Link>
      </Button>
    </div>
  );
};
