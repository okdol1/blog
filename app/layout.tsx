import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[url('/images/bg.jpg')] w-screen h-screen bg-cover bg-no-repeat bg-center">
        {children}
      </body>
    </html>
  );
}
