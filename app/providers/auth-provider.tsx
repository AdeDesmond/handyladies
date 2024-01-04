import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = async ({ children }: AuthProviderProps) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
