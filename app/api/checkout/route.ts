import { Product } from "@prisma/client";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

type ProductForStripe = Product & {
  qty: number;
};

export async function POST(req: NextRequest) {
  const { items, email, userId } = await req.json();
  const transformedItemsForStripe = items.map((item: ProductForStripe) => ({
    quantity: 1,
    price_data: {
      currency: "jpy",
      unit_amount: item.price,
      product_data: {
        name: item.name,
        images: [item.image],
      },
    },
  }));

  const stripesession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "SA", "BO"],
    },
    line_items: transformedItemsForStripe,
    mode: "payment",
    success_url: `${process.env.DOMAIN}/success`,
    cancel_url: `${process.env.DOMAIN}/cart`,
    metadata: {
      email,
      userId,
      images: JSON.stringify(items.map((item: ProductForStripe) => item.image)),
    },
  });
  return NextResponse.json({ id: stripesession.id }, { status: 200 });
}
//description: item.description,
