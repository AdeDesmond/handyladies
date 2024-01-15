import { db } from "@/lib/db";

export const fetchWishListItems = async (userId: string) => {
  return await db.wishlists.findMany({
    where: {
      userId,
    },
    include: {
      products: {
        select: {
          id: true,
          image: true,
          brand: true,
          material: true,
          name: true,
          price: true,
          quantity: true,
          description: true,
          created_At: true,
          updated_At: true,
        },
      },
    },
  });
};
