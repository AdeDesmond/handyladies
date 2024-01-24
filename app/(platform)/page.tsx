import React from "react";
import { HeroSection } from "./_components/hero-section";
import { ShowProduct } from "./_components/product-display";
import { fetchAllProducts } from "@/data/product/query-products";
import { Suspense } from "react";
import { ProductSkeletons } from "./_components/skeletons/product-skeleton";
import { HeroSkeleton } from "./_components/skeletons/hero-skeleton";
async function EcommerceHomePage() {
  const products = await fetchAllProducts();
  return (
    <main className="w-full relative">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<ProductSkeletons />}>
        <ShowProduct products={products} />
      </Suspense>
    </main>
  );
}

export default EcommerceHomePage;
//stripe listen --forward-to localhost:3000/api/webhook    //stripe login
/*

HTML:

html
Copy code
<div class="graffiti">
  <div class="spray"></div>
  <div class="spray"></div>
  <div class="spray"></div>
   //Add more spray elements as needed 
</div>
CSS:

css
Copy code
body {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.graffiti {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #fff;
  overflow: hidden;
}

.spray {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #f00;  //Spray color 
  border-radius: 50%;
  animation: sprayAnimation 2s ease-in-out infinite;
}

@keyframes sprayAnimation {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

//Adjust individual spray positions 
.spray:nth-child(1) {
  top: 30%;
  left: 10%;
}

.spray:nth-child(2) {
  top: 60%;
  left: 70%;
}

.spray:nth-child(3) {
  top: 80%;
  left: 40%;
}

 */
