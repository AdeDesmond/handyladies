import { Badge } from "@/components/ui/badge";

export const SubItem = ({
  currency,
  description,
  quantity,
  email,
  deliveryStatus,
}: any) => {
  return (
    <div>
      <p className="flex items-center gap-x-1">
        <span className="text-muted-foreground">
          Quantity፡{" "}
          <span className="text-xl font-bold text-black">
            {quantity}
            <span className="text-sm text-muted-foreground">
              {quantity > 1 ? "items" : "item"}
            </span>
          </span>{" "}
        </span>
        <span className="flex items-center gap-x-1 text-muted-foreground">
          🚐 delivery status፡
          <Badge>{deliveryStatus}</Badge>
        </span>
      </p>
      <p className="flex items-center gap-x-1">
        <span className="text-muted-foreground">Name፡</span>
        <span>{description}</span>
      </p>
      <p className="flex items-center gap-x-1 ">
        <span className="text-muted-foreground">Currency💷፡</span>
        <span>{currency}</span>
      </p>
      <p className="flex items-center gap-x-1 ">
        <span className="text-muted-foreground">email📧፡</span>
        <span>{email}</span>
      </p>
    </div>
  );
};
