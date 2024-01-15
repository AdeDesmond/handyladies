import { fetchWishListItems } from "@/data/wishlist";
import { getCurrentUser } from "@/lib/getCurrentUser";
import React from "react";
import { WishListItem } from "./_component/wish-list-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

async function WishListPage() {
  const session = await getCurrentUser();
  if (!session?.user || !session) {
    return;
  }
  const wishListData = await fetchWishListItems(session.user.id);
  const renderedWishList = wishListData.map((wishlist) => (
    <WishListItem key={wishlist} item={wishlist} />
  ));
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full mx-auto">
      <div className="grid grid-cols-1 bg-white max-w-[1200px] mx-auto">
        {wishListData.length === 0 ? (
          <div className="bg-white w-[15rem] h-[10rem] flex items-center justify-center mx-auto">
            <Button
              className="flex items-center "
              size="sm"
              variant="secondary"
              asChild
            >
              <Link href="/product" className="flex items-center gap-x-1">
                {" "}
                <ShoppingCartIcon className="w-5 h-5" /> Go Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <h2 className="text-center font-bold mb-2 border-b text-xl mt-2">
            Your wishlist contains፡
            <span className="font-extrabold">{wishListData.length}</span>
            <span className="text-xs text-muted-foreground">items</span>{" "}
          </h2>
        )}
        {renderedWishList}
      </div>
    </div>
  );
}

export default WishListPage;
