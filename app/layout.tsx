import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./providers/auth-provider";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "get a package to show the name of  the open tab",
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

const fallbackFont = localfont({
  src: "../public/font/Roboto-Light.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={cn(fallbackFont.className)}>
          <Toaster />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
