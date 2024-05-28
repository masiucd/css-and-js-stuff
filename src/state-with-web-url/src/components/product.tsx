import Image from "next/image";
import Link from "next/link";
import {PropsWithChildren} from "react";

import {Icons} from "@/components/icons";
import {products, type ProductType} from "@/data";
import {cn} from "@/lib/cn";
import {
  buildUrlString,
  getHrefForArrow,
  getOrDefault,
} from "@/lib/util/product";

import {SizeList} from "./size-list";

export function Product({
  searchParams,
}: {
  searchParams: Record<string, string> | undefined;
}) {
  let urlSearchParams = new URLSearchParams(buildUrlString(searchParams));
  let paramsId = Number(getOrDefault(urlSearchParams, "id", 1));
  let product = products.find(({id}) => id === paramsId) ?? products[0];

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 px-2 py-4">
        <aside className="flex w-full flex-col ">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">
            {product.name}
          </h2>
          <p className="text-xl font-semibold">${product.price}</p>
        </aside>
        <Body
          product={product}
          searchParams={searchParams}
          urlSearchParams={urlSearchParams}
          numProducts={products.length}
        />
        <SizeList
          product={product}
          paramsId={paramsId}
          params={urlSearchParams}
          searchParams={searchParams}
        />
      </div>
    </>
  );
}

function Body({
  product,
  searchParams,
  urlSearchParams,
  numProducts,
}: {
  product: ProductType;
  searchParams: Record<string, string> | undefined;
  urlSearchParams: URLSearchParams;
  numProducts: number;
}) {
  return (
    <div className="my-5 flex min-h-[25rem] items-center gap-4  border-2 bg-green-400 py-5">
      <ArrowLink
        ariaDisabled={product.id === 1}
        product={product}
        searchParams={searchParams}
        direction="left"
        params={urlSearchParams}
        className={
          product.id === 1
            ? "pointer-events-none opacity-30"
            : "pointer-events-auto"
        }
      >
        <span>
          <Icons.ArrowLeft />
        </span>
      </ArrowLink>
      <div className="w-60">
        <Image
          src={product.imageUrl}
          alt="Black shirt Uno"
          width={500}
          height={500}
          className="rounded-md  object-fill "
        />
      </div>
      <ArrowLink
        ariaDisabled={product.id === numProducts}
        product={product}
        searchParams={searchParams}
        direction="right"
        params={urlSearchParams}
        className={
          product.id === numProducts
            ? "pointer-events-none opacity-30"
            : "pointer-events-auto "
        }
      >
        <span>
          <Icons.ArrowRight />
        </span>
      </ArrowLink>
    </div>
  );
}

function ArrowLink({
  product,
  children,
  ariaDisabled,
  className,
  searchParams,
  direction,
  params,
}: PropsWithChildren<{
  product: ProductType;
  ariaDisabled: boolean;
  className?: string;
  searchParams?: Record<string, string>;
  direction: "left" | "right";
  params: URLSearchParams;
}>) {
  return (
    <Link
      aria-disabled={ariaDisabled}
      className={cn("cursor-pointer", className)}
      href={getHrefForArrow(product, direction, searchParams, params)}
      scroll={false}
    >
      {children}
    </Link>
  );
}
