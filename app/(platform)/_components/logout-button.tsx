"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUSer } from "@/hooks/use-current-user";
import { CircleUser, LogOutIcon } from "lucide-react";
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
        {user && <p className="text-black">{user.email}</p> && (
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
          <p className="text-muted-foreground text-xs font-semibold">
            please login for the full experience
          </p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
