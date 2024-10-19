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
      <body className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
        {children}

        {/* // TODO: Header의 위치를 상단으로 이동하여 z-index 문제를 해결할 것 */}
        <Header />
      </body>
    </html>
  );
}
