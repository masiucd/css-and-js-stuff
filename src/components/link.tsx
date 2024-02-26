import NextLink from "next/link";
import {type ComponentPropsWithoutRef, type PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

type NextLinkKeys = "href" | "replace" | "scroll" | "prefetch";

type NextLinkProps = Pick<
  ComponentPropsWithoutRef<typeof NextLink>,
  NextLinkKeys
>;

function Link({
  href,
  replace,
  scroll,
  prefetch,
  children,
  className,
}: NextLinkProps & PropsWithChildren<{className?: string}>) {
  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      className={cn("", className)}
    >
      {children}
    </NextLink>
  );
}

export default Link;
