import {type ReactNode} from "react";

import {PageWrapper} from "@/components/page-wrapper";

export default function LoginRegisterLayout({children}: {children: ReactNode}) {
  return <PageWrapper>{children}</PageWrapper>;
}
