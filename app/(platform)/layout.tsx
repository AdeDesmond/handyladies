"use client";

import localfont from "next/font/local";
import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./_components/header";
import { MobileSideNav } from "./_components/navbar/mobile-nav";
import { cn } from "@/lib/utils";

interface EcommerceLayoutProps {
  children: React.ReactNode;
}

const siteFont = localfont({
  src: "../../public/font/Roboto-Light.ttf",
});

function EcommerceLayout({ children }: EcommerceLayoutProps) {
  const pathName = usePathname();
  return (
    <div
      className={cn(
        "max-w-[1500px]  mx-auto min-h-screen relative",
        siteFont.className
      )}
    >
      {pathName !== "/" ? <Header /> : null}
      <div className="block lg:hidden md:block">
        <MobileSideNav />
      </div>
      {children}
    </div>
  );
}

export default EcommerceLayout;
