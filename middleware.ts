import * as routes from "@/routes";

import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoutes = nextUrl.pathname.startsWith(routes.apiAuthPrefix);
  const isPublicRoute = routes.publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = routes.authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoutes) {
    return null;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(routes.DEFAULT_LOGIN_REDIRECT, nextUrl) //to create an absolute path
      );
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (!nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallBackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/auth/signin?callbackUrl${encodedCallBackUrl}`, nextUrl)
    );
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
