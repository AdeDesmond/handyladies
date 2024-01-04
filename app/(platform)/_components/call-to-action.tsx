import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
//TODO get a better font
export const CallToAction = () => {
  return (
    <div className="absolute w-[400px] top-[18rem] left-[3rem] lg:left-[12rem] md:left-[5rem]">
      <p className="mb-6 text-xl font-bold text-white leading-relaxed">
        Changing the frontiers of hand bags with{" "}
        <span className={cn("bg-slate-800 h-8 p-3 clip text-xs text-gray-200")}>
          handyladies
        </span>{" "}
      </p>
      <Button
        asChild
        className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300 group"
      >
        <Link href="/" className="flex items-center gap-x-1">
          <ShoppingBagIcon className="h-5 w-5  group-hover:translate-x-1 group-hover:rotate-180 transition duration-150 ease-in-out" />
          Discover our world
        </Link>
      </Button>
    </div>
  );
};
