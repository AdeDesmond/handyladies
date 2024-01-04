import Image from "next/image";
import { ProductDetailItem } from "./product-detail-item";

interface ShowProductItemsProps {
  item: {
    bagImageUrl: string;
    name: string;
    price: number;
    material: string;
  };
}

export const ShowProductItem = ({ item }: ShowProductItemsProps) => {
  return (
    <div className="group w-[300px] h-[300px] bg-white relative p-1 hover:shadow-lg focus:shadow-md shadow-sm transition-shadow ease-in-out duration-200">
      <Image
        src={item.bagImageUrl}
        alt="bag"
        fill
        className="object-cover cursor-pointer hover:scale-105 transition ease-in-out duration-200 grayscale hover:grayscale-0"
      />
      <ProductDetailItem
        name={item.name}
        price={item.price}
        material={item.material}
      />
    </div>
  );
};
