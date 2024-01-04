"use client";

interface EcommerceLayoutProps {
  children: React.ReactNode;
}

import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./_components/header";
import { MobileSideNav } from "./_components/navbar/mobile-nav";

function EcommerceLayout({ children }: EcommerceLayoutProps) {
  const pathName = usePathname();
  return (
    <div className="max-w-[1500px]  mx-auto min-h-screen relative">
      {pathName !== "/" ? <Header /> : null}
      <div className="block lg:hidden md:block">
        <MobileSideNav />
      </div>
      {children}
    </div>
  );
}

export default EcommerceLayout;
