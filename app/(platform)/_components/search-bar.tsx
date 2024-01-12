"use client";

import { SearchIcon } from "lucide-react";
import { LogoutButton } from "./logout-button";
import { useSearchParams } from "next/navigation";
import { search } from "@/actions/search";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  return (
    <div className="hidden w-[1200px] h-[2.8rem] bg-slate-100 mx-auto  lg:flex items-center justify-between rounded-tl-md rounded-tr-md p-2 overflow-hidden">
      <div className="w-[60%] flex items-center border rounded-md gap-x-1">
        <SearchIcon className="h-5 w-5" />
        <form action={search} className="w-full">
          <input
            type="text"
            name="term"
            id="term"
            placeholder="Search for handy classy bags"
            className="h-8 w-full rounded-md outline-none focus:ring focus:ring-amber-400 focus:ring-offset-1 placeholder:text-xs placeholder:text-muted-foreground bg-slate-100"
            defaultValue={searchParams.get("term") || ""}
          />
        </form>
      </div>
      <LogoutButton />
    </div>
  );
};
