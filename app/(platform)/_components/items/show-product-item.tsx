import Image from "next/image";

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
    <div className="w-[300px] h-[300px] bg-white relative p-1">
      <Image src={item.bagImageUrl} alt="bag" fill className="object-cover" />
    </div>
  );
};
