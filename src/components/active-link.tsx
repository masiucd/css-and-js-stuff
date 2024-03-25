"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {type PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

type Props = {
  className?: string;
  href: string;
};

export function ActiveLink({
  className,
  href,
  children,
}: PropsWithChildren<Props>) {
  let pathname = usePathname();
  return (
    <Link
      className={cn(
        "opacity-60 hover:opacity-100 focus:opacity-100 active:opacity-100",
        pathname === href &&
          "underline underline-offset-2 decoration-gray-700 decoration-2",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
