import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Eunbin Galaxy",
  description: "Explore the cosmos of frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen grid grid-rows-[auto,1fr]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
