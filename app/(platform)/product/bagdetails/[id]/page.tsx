import { fetchSingleProduct } from "@/data/product/query-product";
import { ProductsWithDetails } from "./_components/product-details";
import { fetchComments } from "@/data/comments";
import { fetchWishListItems } from "@/data/wishlist";
import { getCurrentUser } from "@/lib/getCurrentUser";

interface BagDetailsProps {
  params: {
    id: string;
  };
}

async function BagDetailsPage({ params }: BagDetailsProps) {
  const session = await getCurrentUser();
  const singleProduct = await fetchSingleProduct(params.id);
  const commentsByProduct = await fetchComments(params.id);
  const wishListItem = await fetchWishListItems(session?.user.id as string);

  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center ">
      <ProductsWithDetails
        item={singleProduct}
        productId={params.id}
        commentsByProduct={commentsByProduct}
        isWishList={wishListItem}
      />
    </section>
  );
}

export default BagDetailsPage;
