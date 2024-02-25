import "./globals.css";

import {Theme} from "@radix-ui/themes";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Movie mingle",
  description: "A social network for movie lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="indigo"
          grayColor="slate"
          radius="medium"
          scaling="90%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
