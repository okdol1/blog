import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { GoogleTagManager } from "@next/third-parties/google";
import { METADATA } from "@/constants/metadata";

export const metadata: Metadata = METADATA;

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen grid grid-rows-[auto,1fr] text-primay-text">
          <Header />
          {children}
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-TWNT4BD4" />
    </html>
  );
}
