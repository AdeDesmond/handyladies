import { Button } from "@/components/ui/button";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
//TODO get a better font

const calltoActionFont = localfont({
  src: "../../../public/font/DancingScript-Bold.ttf",
});

export const CallToAction = () => {
  return (
    <div className="absolute w-[400px] top-[10rem] left-[3rem] lg:left-[10rem] md:left-[5rem]">
      <p className="mb-2 text-4xl font-extrabold  leading-relaxed text-slate-300">
        Changing the frontiers of hand bags with{" "}
        <span
          className={cn(
            " h-8 p-3 clip text-4xl text-amber-600 font-extrabold ",
            calltoActionFont.className
          )}
        >
          handyladies.
        </span>{" "}
      </p>
      <Button
        asChild
        className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300 group"
      >
        <Link href="/product" className="flex items-center gap-x-1">
          <ShoppingBagIcon className="h-5 w-5  group-hover:translate-x-1 group-hover:rotate-180 transition duration-150 ease-in-out" />
          Discover our world
        </Link>
      </Button>
    </div>
  );
};
