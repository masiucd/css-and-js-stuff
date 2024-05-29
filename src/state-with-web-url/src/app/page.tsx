import {Suspense} from "react";

import {Product} from "@/components/product";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string> | undefined;
}) {
  return (
    <section className="flex flex-1 flex-col">
      <Title />
      <div className="flex flex-1 items-center justify-center">
        <Suspense fallback={<CardSkeleton />}>
          <Product searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="my-10 ">
      <h1 className="mb-5 text-5xl font-semibold tracking-tighter">
        Saving state in URL
      </h1>
      <p className="text-base">
        This is a simple example of how to save state in the URL using Next.js.
      </p>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex min-w-72 flex-col items-center justify-center rounded-md border-2 border-gray-400 px-2 py-4">
      <div className="flex animate-pulse flex-col justify-center gap-3">
        <div className="size-64 rounded-lg bg-gray-200"></div>
        <div className="my-2 h-4 w-36 rounded-lg bg-gray-200"></div>
        <div className="my-2 h-4 w-52 rounded-lg bg-gray-200"></div>
        <div className="my-2 h-4 w-32 rounded-lg bg-gray-200"></div>
        <div className="my-2 h-4 w-44 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
}
