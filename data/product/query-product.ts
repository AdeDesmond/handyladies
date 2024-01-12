import { db } from "@/lib/db";

export const fetchSingleProduct = async (id: string) => {
  return await db.product.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          Comments: true,
        },
      },
    },
  });
};
