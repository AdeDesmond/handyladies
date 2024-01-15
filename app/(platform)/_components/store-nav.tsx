"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export const StoreNav = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-center gap-x-1 text-slate-200 flex-col gap-y-3 lg:flex-row">
      <Button
        className={cn(
          pathName.includes("/product") &&
            " bg-amber-700 border-none text-white"
        )}
        size="sm"
        asChild
      >
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

      <Button
        className={cn(
          pathName.includes("/wishlist") &&
            " bg-amber-700 border-none text-white"
        )}
        asChild
      >
        <Link
          href="/wishlist"
          className="text-sm text-muted-foreground text-slate-400"
        >
          Wishlist
        </Link>
      </Button>

      <Button asChild>
        <Link
          href="/cart"
          className={cn(
            "text-sm text-muted-foreground flex items-center gap-x-1 text-slate-400 relative",
            pathName.includes("/cart") && " bg-amber-700 border-none text-white"
          )}
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
