import React from "react";
import { HeroSection } from "./_components/hero-section";
import { ShowProduct } from "./_components/product-display";
import { fetchAllProducts } from "@/data/product/query-products";

async function EcommerceHomePage() {
  const products = await fetchAllProducts();
  return (
    <main className="w-full relative">
      <HeroSection />
      <ShowProduct products={products} />
    </main>
  );
}

export default EcommerceHomePage;
