import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfilePage() {
  return (
    <div
      className={cn(
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex justify-center pt-28"
      )}
    >
      <div className="w-[80%] bg-white h-full">
        <div className="w-full h-[15rem] relative">
          <Image
            src="/back4.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-4 p-4 ">
          <div className="basis-[25%] bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-[6rem] h-[6rem] bg-white rounded-lg border flex items-center justify-center mb-2">
              <ImageIcon className="h-6 w-6" />
            </div>
            <p>Desmond</p>
            <p>
              Role: <span>Admin</span>{" "}
            </p>
            <Separator className="w-full mb-2 mt-2" />
            <p>online status: badge for shadcn</p>
          </div>
          <div className="flex-1 bg-sky-500">
            links to different parts of the the uui
            <Button variant="link" size="sm" asChild>
              <Link href="/product/new-product">new product</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
