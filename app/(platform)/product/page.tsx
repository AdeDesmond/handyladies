import React from "react";
import { ShowProduct } from "../_components/product-display";
import { fetchAllProducts } from "@/data/product/query-products";

async function ProductPage() {
  const products = await fetchAllProducts();
  return (
    <div>
      <ShowProduct products={products} />
    </div>
  );
}

export default ProductPage;
