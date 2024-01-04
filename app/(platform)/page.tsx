import React from "react";
import { HeroSection } from "./_components/hero-section";
import { ShowProduct } from "./_components/product-display";

function EcommerceHomePage() {
  return (
    <main className="w-full relative">
      <HeroSection />
      <ShowProduct />
    </main>
  );
}

export default EcommerceHomePage;
