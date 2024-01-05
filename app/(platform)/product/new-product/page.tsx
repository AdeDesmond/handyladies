import React from "react";
import { PostNewProduct } from "../../_components/product-form/new-product-form";

function NewProductPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex items-center justify-center">
      <PostNewProduct />
    </div>
  );
}

export default NewProductPage;
