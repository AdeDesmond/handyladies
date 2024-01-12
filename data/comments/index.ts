import { db } from "@/lib/db";

export const fetchComments = async (productId: string) => {
  return await db.comments.findMany({
    where: {
      productId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
    },
    orderBy: {
      created_At: "desc",
    },
  });
};
