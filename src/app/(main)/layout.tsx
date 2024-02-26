import {type ReactNode} from "react";

import Link from "@/components/link";
import {Small} from "@/components/typography";
import {siteData} from "@/config/site-data";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="flex h-[5rem]">
        <div className="app-width mx-auto flex w-full flex-1 items-center ">
          <Link href="/">
            <strong>{siteData.title}</strong>
          </Link>
        </div>
      </header>
      <main className="flex min-h-[calc(100dvh-10rem)] flex-col">
        {children}
      </main>
      <footer className="flex h-[5rem] ">
        <div className="app-width mx-auto flex w-full flex-1 items-center gap-2">
          <Small className="flex gap-2">
            <strong>
              © {new Date().getFullYear()} {siteData.title}. All rights
              reserved.
            </strong>
            <p>
              Built with
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nextjs.org"
                className="mx-1"
              >
                <span className="text-primary-600 hover:underline focus:underline active:underline">
                  Next.js
                </span>
              </a>
            </p>
          </Small>
        </div>
      </footer>
    </>
  );
}
