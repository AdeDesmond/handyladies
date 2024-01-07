import Image from "next/image";
import { ProductDetailItem } from "./product-detail-item";
import Link from "next/link";

interface ShowProductItemsProps {
  item: {
    id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
    material: string;
    created_At: Date;
    updated_At: Date;
  };
}

export const ShowProductItem = ({ item }: ShowProductItemsProps) => {
  return (
    <div className="group w-[300px] h-[300px] bg-white relative p-1 hover:shadow-lg focus:shadow-md shadow-sm transition-shadow ease-in-out duration-200">
      <Link href={`/product/bagdetails/${item.id}`}>
        <Image
          src={item.image}
          alt="bag"
          fill
          className="object-cover cursor-pointer hover:scale-105 transition ease-in-out duration-200 grayscale hover:grayscale-0"
        />
      </Link>
      <ProductDetailItem
        name={item.name}
        price={item.price}
        material={item.material}
      />
    </div>
  );
};
