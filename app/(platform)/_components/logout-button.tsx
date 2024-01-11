"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUSer } from "@/hooks/use-current-user";
import { CircleUser, LogIn, LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const LogoutButton = () => {
  const user = useCurrentUSer();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <div className="flex items-center gap-x-1">
          {" "}
          {user && <p className="text-sm font-semibold">{user.name}</p>}
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-amber-500 ">
              <CircleUser className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center justify-center">
        {user && <p className="text-black mr-2">{user.email}</p> && (
          <>
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/profile">{user.name}</Link>
            </Button>
            <Button
              className="group flex items-center gap-x-1"
              onClick={() => signOut()}
              size="sm"
              variant="outline"
            >
              Logout{" "}
              <LogOutIcon className="h-5 w-5 group-hover:translate-x-1 transition-all" />
            </Button>
          </>
        )}
        {!user && (
          <div className="bg-white flex items-center flex-col gap-y-2">
            <p className="text-muted-foreground text-xs">
              Please login for the full experience
            </p>
            <Button size="sm" variant="secondary" asChild>
              <Link href="/signin" className="flex items-center group gap-x-1">
                <LogIn className="w-6 h-6 group-hover:-translate-x-1 transition" />
                login
              </Link>
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
