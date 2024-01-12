import { fetchSingleProduct } from "@/data/product/query-product";
import { ProductsWithDetails } from "./_components/product-details";
import { fetchComments } from "@/data/comments";

interface BagDetailsProps {
  params: {
    id: string;
  };
}

async function BagDetailsPage({ params }: BagDetailsProps) {
  const singleProduct = await fetchSingleProduct(params.id);
  const commentsByProduct = await fetchComments(params.id);
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center ">
      <ProductsWithDetails
        item={singleProduct}
        productId={params.id}
        commentsByProduct={commentsByProduct}
      />
    </section>
  );
}

export default BagDetailsPage;
