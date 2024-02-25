import {Metadata} from "next";
import {type ReactNode} from "react";

import {PageWrapper} from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Trips",
  description: "Lovely trips to take around the world.",
};

export default function TripsLayout({children}: {children: ReactNode}) {
  return <PageWrapper>{children}</PageWrapper>;
}
