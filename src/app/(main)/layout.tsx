import {type ReactNode} from "react";

import {ActiveLink} from "@/components/active-link";
import Link from "@/components/link";
import {Small} from "@/components/typography";
import {siteData} from "@/config/site-data";
import {getSession} from "@/lib/session";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
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

async function Header() {
  let session = await getSession();
  return (
    <header className="flex h-[5rem]">
      <div className="app-width mx-auto flex w-full flex-1 items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-50">
          <strong className="text-xl font-bold capitalize leading-none opacity-80 hover:opacity-100 focus:opacity-100 active:opacity-100">
            {siteData.title}
          </strong>
        </Link>
        <nav>
          <ul className="flex gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <ActiveLink href={link.href}>{link.label}</ActiveLink>
              </li>
            ))}
            {!session ? (
              <li>
                <ActiveLink href="/login">
                  <span>Login</span>
                </ActiveLink>
              </li>
            ) : (
              <li>
                <ActiveLink href="/profile">
                  <span>Profile</span>
                </ActiveLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

let navLinks = Object.freeze([
  {
    href: "/trips",
    label: "Trips",
  },
  {
    href: "/tours",
    label: "Tours",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]);
