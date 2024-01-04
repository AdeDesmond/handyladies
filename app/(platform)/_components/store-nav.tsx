import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export const StoreNav = () => {
  return (
    <div className="flex items-center justify-center gap-x-1 text-slate-200">
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
          href="/product"
          className="text-sm text-muted-foreground flex items-center gap-x-1 text-slate-400"
        >
          <ShoppingCartIcon className="h-5 w-5 text-amber-500" />
          Cart
        </Link>
      </Button>
    </div>
  );
};
