import Image from "next/image";
import Link from "next/link";
import {PropsWithChildren} from "react";

import {Icons} from "@/components/icons";
import {getProducts, type ProductType} from "@/lib/api/data";
import {cn} from "@/lib/cn";
import {
  buildUrlString,
  getHrefForArrow,
  getOrDefault,
} from "@/lib/util/product";

import {SizeList} from "./size-list";

export async function Product({
  searchParams,
}: {
  searchParams: Record<string, string> | undefined;
}) {
  let products = await getProducts();
  let urlSearchParams = new URLSearchParams(buildUrlString(searchParams));
  let paramsId = Number(getOrDefault(urlSearchParams, "id", 1));
  let product = products.find(({id}) => id === paramsId);

  if (!product) {
    // TODO do something better here
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-md border border-gray-600 bg-gray-900 px-2 py-4">
        <Top product={product} />
        <Body
          product={product}
          searchParams={searchParams}
          urlSearchParams={urlSearchParams}
          products={products}
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

function Top({product}: {product: ProductType}) {
  return (
    <aside className="flex w-full flex-col ">
      <h2 className="text-4xl font-semibold leading-tight tracking-tight">
        {product.name}
      </h2>
      <p className="text-xl font-semibold">${product.price}</p>
    </aside>
  );
}

function Body({
  product,
  searchParams,
  urlSearchParams,
  products,
}: {
  product: ProductType;
  searchParams: Record<string, string> | undefined;
  urlSearchParams: URLSearchParams;
  products: ProductType[];
}) {
  return (
    <div className="my-5 flex min-h-[25rem] items-center gap-4  py-5">
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
        products={products}
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
        ariaDisabled={product.id === products.length}
        product={product}
        searchParams={searchParams}
        direction="right"
        params={urlSearchParams}
        className={
          product.id === products.length
            ? "pointer-events-none opacity-30"
            : "pointer-events-auto "
        }
        products={products}
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
  products,
}: PropsWithChildren<{
  product: ProductType;
  ariaDisabled: boolean;
  className?: string;
  searchParams?: Record<string, string>;
  direction: "left" | "right";
  params: URLSearchParams;
  products: ProductType[];
}>) {
  return (
    <Link
      aria-disabled={ariaDisabled}
      className={cn("cursor-pointer", className)}
      href={getHrefForArrow(product, direction, searchParams, params, products)}
      scroll={false}
    >
      {children}
    </Link>
  );
}
