import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./providers/auth-provider";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import CartProviders from "@/redux-store/slice/slice-provider";

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
    <CartProviders>
      <AuthProvider>
        <html lang="en">
          <body className={cn(fallbackFont.className)}>
            <Toaster />
            {children}
          </body>
        </html>
      </AuthProvider>
    </CartProviders>
  );
}
