import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SubItem } from "./sub-item";

export const OrderItem = ({
  amount,
  email,
  address,
  status,
  delivery_status,
  images,
  date,
  items,
}: any) => {
  const renderedSubItems = items.map((item: any) => (
    <SubItem
      key={item.id}
      currency={item.price.currency}
      description={item.description}
      quantity={item.quantity}
      email={email}
      deliveryStatus={delivery_status}
    />
  ));
  return (
    <div className="bg-white w-[80%] mx-auto mt-4">
      <div className="bg-gray-300 h-14 w-full flex items-center justify-between px-4 ">
        <div className="flex items-center gap-x-6">
          <p className="flex flex-col">
            <span className="text-muted-foreground">Order Placed</span>
            <span>{new Date(date).toLocaleString()}</span>
          </p>
          <p className="flex flex-col">
            <span className="text-muted-foreground">Total</span>
            <p>
              {" "}
              <span className="text-xs text-muted-foreground">&yen;</span>
              <strong className=" font-semibold">{amount}</strong>
              <span className="text-xs text-muted-foreground">.00</span>{" "}
            </p>
          </p>
          <p className="flex flex-col">
            <span className="text-muted-foreground">Ship To</span>
            <span>{`${address.country}፡${address.city}፡${address.postal_code}፡${address.line1}`}</span>
          </p>
        </div>
        <Badge className="bg-emerald-500">{status}</Badge>
      </div>
      <div className="flex items-center gap-x-4 p-4 w-full">
        <div className=" flex flex-col">
          {images.map((img: string) => (
            <div key={img} className="">
              <Image
                src={img}
                alt="bag"
                width={100}
                height={100}
                className="object-cover rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>
        <div>{renderedSubItems}</div>
      </div>
    </div>
  );
};
//
