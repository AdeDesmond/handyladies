"use client";

interface EcommerceLayoutProps {
  children: React.ReactNode;
}

import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./_components/header";

function EcommerceLayout({ children }: EcommerceLayoutProps) {
  const pathName = usePathname();
  return (
    <div className="max-w-[1500px]  mx-auto min-h-screen">
      {pathName !== "/" ? <Header /> : null}
      {children}
    </div>
  );
}

export default EcommerceLayout;
