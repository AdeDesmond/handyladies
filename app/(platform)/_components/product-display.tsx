import { ShowProductItem } from "./items/show-product-item";

const testProducts = [
  {
    bagImageUrl: "/bags/1.png",
    name: "Kors",
    price: 300,
    material: "leather",
  },
  {
    bagImageUrl: "/bags/2.png",
    name: "YSL",
    price: 1200,
    material: "leather",
  },
  {
    bagImageUrl: "/bags/3.png",
    name: "Channel",
    price: 800,
    material: "Hides Skin leather",
  },
  {
    bagImageUrl: "/bags/4.png",
    name: "Gucci",
    price: 900,
    material: "Cow leather",
  },
  {
    bagImageUrl: "/bags/5.png",
    name: "Plein",
    price: 500,
    material: "crock leather",
  },
];

export const ShowProduct = () => {
  const renderedBags = testProducts.map((item) => (
    <ShowProductItem key={item.name} item={item} />
  ));
  return (
    <div className="w-[1200px] bg-white absolute top-[30rem]  z-1000 left-[10rem] grid grid-cols-3 min-h-screen place-items-center gap-3 p-4">
      {renderedBags}
    </div>
  );
};
