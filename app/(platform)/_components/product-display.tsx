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
    <div className=" grid-cols-1 md:grid-cols-2 w-[500px] md:w-[750px] md:left-[5rem] gap-y-4  lg:w-[1200px] bg-white absolute md:top-[28rem] lg:top-[28rem]  z-1000 lg:left-[10rem] grid lg:grid-cols-3 min-h-screen place-items-center gap-3 p-4">
      {renderedBags}
    </div>
  );
};
