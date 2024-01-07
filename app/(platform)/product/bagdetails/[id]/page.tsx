import { fetchSingleProduct } from "@/data/product/query-product";
import { ProductsWithDetails } from "./_components/product-details";

interface BagDetailsProps {
  params: {
    id: string;
  };
}

async function BagDetailsPage({ params }: BagDetailsProps) {
  const singleProduct = await fetchSingleProduct(params.id);
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen w-full pt-20 mx-auto flex justify-center">
      <ProductsWithDetails item={singleProduct} />
    </section>
  );
}

export default BagDetailsPage;
