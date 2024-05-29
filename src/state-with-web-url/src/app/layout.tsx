import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "State in URL",
  description: "Saving state in the URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto flex min-h-dvh max-w-4xl flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
