import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

import {siteData} from "@/config/site-data";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
