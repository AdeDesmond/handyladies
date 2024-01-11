import { Separator } from "@/components/ui/separator";
import { fetchOrdersPerUser } from "@/data/orders";
import { getCurrentUser } from "@/lib/getCurrentUser";
import React from "react";
import { OrderItem } from "./_components/order-item";

async function OrdersPage() {
  const session = await getCurrentUser();
  const userOrders = await fetchOrdersPerUser(session?.user.email as string);
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full">
      <div className="bg-slate-200 w-[80%] mx-auto min-h-screen p-4">
        <h1 className="text-2xl border-b border-b-amber-800">Your Orders</h1>
        {userOrders?.map((order) => (
          <OrderItem
            key={order.id}
            amount={order.amount}
            email={order.email}
            address={order.address}
            status={order.status}
            delivery_status={order.delivery_status}
            date={order.date}
            images={order.images}
            items={order.items}
          />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
