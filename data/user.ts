import { db } from "../lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
  }
};
