// app/components/link.tsx

import {Link as RadixLink} from "@radix-ui/themes";
import NextLink from "next/link";
import {type ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";

type NextLinkKeys = "href" | "replace" | "scroll" | "prefetch";

type RadixLinkProps = Omit<
  ComponentPropsWithoutRef<typeof RadixLink>,
  NextLinkKeys
>;

type NextLinkProps = Pick<
  ComponentPropsWithoutRef<typeof NextLink>,
  NextLinkKeys
>;

const Link = forwardRef<ElementRef<"a">, RadixLinkProps & NextLinkProps>(
  function Link(
    {children, href, replace, scroll, prefetch, className, ...rest},
    forwardedRef,
  ) {
    return (
      <RadixLink asChild {...rest} ref={forwardedRef} className={className}>
        <NextLink
          href={href}
          replace={replace}
          scroll={scroll}
          prefetch={prefetch}
        >
          {children}
        </NextLink>
      </RadixLink>
    );
  },
);

export default Link;
