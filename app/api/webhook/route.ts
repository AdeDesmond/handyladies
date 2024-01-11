import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { db } from "@/lib/db";

//establish connection with strip

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    //verify that the event came from stripe
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SIGNING_SECRET!
    );
  } catch (err: any) {
    console.log("error ❌❌", err);
    return NextResponse.json({ error: "WebHook Erro" }, { status: 400 });
  }
  //if we pass this stage then handle the checkout completed event

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    //fullfilled the order and store the information inside the db
    await db.orders.create({
      data: {
        email: session.metadata ? session.metadata.email : undefined,
        orderId: session.id,
        amount: session.amount_total as number,
        image: session.metadata
          ? JSON.parse(session.metadata.images as any)
          : null,
        created_At: new Date(),
        userId: session.metadata ? (session.metadata.userId as any) : undefined,
        currency: session.currency as string,
        status: session.payment_status as string,
        address: session.customer_details?.address as any,
      },
    });
    // return fullfilledOrder(session, userSession?.user.id as string)
    //   .then(() => Response.json({ message: "success" }, { status: 200 }))
    //   .catch((err: unknown) => {
    //     console.log("💥💥 ERROR", err);
    //     Response.json({ error: "Webhook Error" }, { status: 500 });
    //   });
  }

  return NextResponse.json({ message: "success" }, { status: 200 });
}

/**
 * The session started at the redirect and we have
 */
