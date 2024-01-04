"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUSer } from "@/hooks/use-current-user";
import Link from "next/link";

export const CustomerNav = () => {
  const user = useCurrentUSer();
  let authState;

  if (user) {
    return (
      <div className="text-muted-foreground ">Welcome back to handyladies</div>
    );
  } else if (!user) {
    return (
      <div className="text-white lg:space-x-2 flex flex-col lg:flex-row gap-y-2 items-center">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/auth/signin" className="text-muted-foreground text-sm">
            Sign in
          </Link>
        </Button>

        <Button className="bg-amber-700" size="sm" asChild>
          <Link href="/auth/signup" className=" text-sm text-white">
            Sign up
          </Link>
        </Button>
      </div>
    );
  }

  return authState;
};
