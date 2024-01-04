import { SearchIcon } from "lucide-react";
import { LogoutButton } from "./logout-button";

export const SearchBar = () => {
  return (
    <div className="w-[1200px] h-[2.8rem] bg-slate-100 mx-auto  flex items-center justify-between rounded-tl-md rounded-tr-md p-2 overflow-hidden">
      <div className="w-[60%] flex items-center border rounded-md gap-x-1">
        <SearchIcon className="h-5 w-5" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for handy classy bags"
          className="h-8 w-full rounded-md outline-none focus:ring focus:ring-amber-400 focus:ring-offset-1 placeholder:text-xs placeholder:text-muted-foreground bg-slate-100"
        />
      </div>
      <LogoutButton />
    </div>
  );
};
