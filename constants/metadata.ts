import { Metadata } from "next";

export const METADATA_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Eunbin Galaxy",
};

export const METADATA: Metadata = {
  title: "Eunbin Galaxy",
  description: "Dev & Space: Explore development and space.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.eunbinyeon.com",
    siteName: "Eunbin Galaxy",
    description: "Dev & Space: Explore development and space.",
    images: [METADATA_IMAGE],
  },
  twitter: {
    card: "summary",
    title: "Eunbin Galaxy",
    description: "Dev & Space: Explore development and space.",
  },
};
