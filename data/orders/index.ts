import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";

export async function fetchOrdersPerUser(email: string) {
  const stripeOrders = await db.orders.findMany({
    where: {
      email,
    },
    orderBy: {
      created_At: "desc",
    },
  });
  //stripe orders
  //the format of the map is to implicitly return it
  const orders = await Promise.all(
    stripeOrders.map(async (order) => ({
      id: order.id,
      amount: order.amount,
      email: order.email,
      address: order.address,
      status: order.status,
      delivery_status: order.deliveryStatus,
      images: order.image,
      date: order.created_At,
      items: (
        await stripe.checkout.sessions.listLineItems(order.orderId, {
          limit: 100,
        })
      ).data,
    }))
  );

  //items is a reminder that we can have function in objects, and we can use an implicit return when using map function to set datas to the way we want

  return orders;
}
