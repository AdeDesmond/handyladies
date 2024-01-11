"use client";

import { CheckCircle2 } from "lucide-react";
import React from "react";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const successFont = localfont({
  src: "../../../public/font/DancingScript-Bold.ttf",
});

function SuccessPage() {
  const router = useRouter();
  const redirectToRoute = () => {
    router.push("/order");
  };
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex items-center justify-center">
      <div className="bg-slate-200 w-[60%] h-[20rem] rounded-lg ">
        <div className="flex items-center  flex-col justify-center pt-4 pl-9 lg:pl-5">
          <CheckCircle2 className="text-emerald-500 h-8 w-8" />
          <h1>
            Your order has been confirmed!! Thanks for choosing{" "}
            <span
              className={cn(
                successFont.className,
                "text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-yellow-500"
              )}
            >
              handyladies
            </span>{" "}
          </h1>
          <p className="mt-3 text-muted-foreground">
            Thanks for shopping with us, we will send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) please click the{" "}
            <span className="font-semibold text-black">link</span> below
          </p>
          <Button
            onClick={redirectToRoute}
            className="mt-5 bg-amber-600 hover:bg-amber-800 sm:mt-1"
          >
            Go to my orders
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
