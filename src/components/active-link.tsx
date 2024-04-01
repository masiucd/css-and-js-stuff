"use client";

import {Text} from "@radix-ui/themes";
import {usePathname} from "next/navigation";
import {type PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

import {Link} from "./link";

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
    <Link href={href}>
      <Text
        as="span"
        size="3"
        weight="medium"
        className={cn(
          "text-gray-900 hover:text-primary-500",
          pathname === href &&
            "underline underline-offset-2 decoration-gray-700 decoration-2 text-primary-500 hover:opacity-50",
          className,
        )}
      >
        {children}
      </Text>
    </Link>
  );
}
