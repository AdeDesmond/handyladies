import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;
      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) {
        return false;
      }

      //TODO add add factor authentication process

      return true;
    },
    async session({ token, session }) {
      //console.log(session);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return null;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token;
    },
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
