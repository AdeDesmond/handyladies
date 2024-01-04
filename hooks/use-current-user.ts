"use client";

import { useSession } from "next-auth/react";

export const useCurrentUSer = () => {
  const session = useSession();
  return session.data?.user;
};
