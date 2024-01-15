import { wishList } from "@/actions/wishlist";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export const WishListDisplayButton = ({ wish }: any) => {
  return (
    <Button type="submit" size="sm" variant="outline">
      {wish.isWishListed ? (
        <BsHeartFill className="h-4 w-4" />
      ) : (
        <BsHeart className="w-4 h-4" />
      )}
    </Button>
  );
};
