"use client";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {PropsWithChildren} from "react";

import {Icons} from "@/components/icons";
import {cn} from "@/lib/cn";
import {slugify} from "@/lib/util/slugify";
import {products, ProductType} from "@/products";

function getOrDefault<T>(
  params: URLSearchParams,
  key: string,
  defaultValue: T
) {
  let value = params.get(key);
  return value === null ? defaultValue : value;
}

export function Products({
  searchParams,
}: {
  searchParams: Record<string, string> | undefined;
}) {
  let params = useSearchParams();
  let paramsId = Number(getOrDefault(params, "id", 1));
  let product = products.find(({id}) => id === paramsId) ?? products[0];

  // if we change the shirt we need to delete the size from the url
  if (product.id !== paramsId) {
    // params.delete("size");
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 px-2 py-4">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-xl font-semibold">${product.price}</p>
        <div className="my-5 flex min-h-[25rem] items-center gap-4  border-2 bg-green-400 py-5">
          <ArrowLink
            ariaDisabled={product.id === 1}
            product={product}
            searchParams={searchParams}
            direction="left"
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
            ariaDisabled={product.id === products.length}
            product={product}
            searchParams={searchParams}
            direction="right"
            className={
              product.id === products.length
                ? "pointer-events-none opacity-30"
                : "pointer-events-auto "
            }
          >
            <span>
              <Icons.ArrowRight />
            </span>
          </ArrowLink>
        </div>
        <SizeList
          product={product}
          paramsId={paramsId}
          params={params}
          searchParams={searchParams}
        />
      </div>
    </>
  );
}

function SizeList({
  product,
  paramsId,
  params,
  searchParams,
}: {
  product: ProductType;
  paramsId: number;
  params: URLSearchParams;
  searchParams?: Record<string, string>;
}) {
  let urlSearchParams = new URLSearchParams(params.toString());
  return (
    <ul className="flex gap-2">
      {product.amiableSizes.map(({size, available}) => {
        let selectedSize =
          paramsId === product.id && size === searchParams?.size;
        return (
          <SizeListItem
            key={size}
            size={size}
            available={available}
            selectedSize={selectedSize}
            product={product}
            urlSearchParams={urlSearchParams}
          />
        );
      })}
    </ul>
  );
}

function SizeListItem({
  size,
  available,
  selectedSize,
  product,
  urlSearchParams,
}: {
  size: string;
  available: boolean;
  selectedSize: boolean;
  product: ProductType;
  urlSearchParams: URLSearchParams;
}) {
  return (
    <li>
      <Link
        href={getHref(product, size, urlSearchParams)}
        scroll={false}
        className={cn(
          "min-w-12 cursor-pointer rounded-md uppercase bg-main-950  text-center font-bold  text-main-50 shadow p-1 hover:opacity-55 transition-opacity",
          available
            ? "opacity-100 pointer-events-auto"
            : "opacity-50 pointer-events-none ",
          selectedSize && "bg-main-50 text-main-950"
        )}
      >
        {size}
      </Link>
    </li>
  );
}

function ArrowLink({
  product,
  children,
  ariaDisabled,
  className,
  searchParams,
  direction,
}: PropsWithChildren<{
  product: ProductType;
  ariaDisabled: boolean;
  className?: string;
  searchParams?: Record<string, string>;
  direction: "left" | "right";
}>) {
  return (
    <Link
      aria-disabled={ariaDisabled}
      className={cn("cursor-pointer", className)}
      href={getHrefForArrow(product, direction, searchParams)}
      scroll={false}
    >
      {children}
    </Link>
  );
}

function getHrefForArrow(
  product: ProductType,
  direction: "left" | "right",
  searchParams: Record<string, string> | undefined
) {
  let searchParamsURL = new URLSearchParams();
  let nextProduct = null;
  if (direction === "left") {
    searchParamsURL.set("id", (product.id - 1).toString());
    nextProduct = products.find(
      ({id}) => id === Number(searchParamsURL.get("id"))
    );
  } else {
    searchParamsURL.set("id", (product.id + 1).toString());
    nextProduct = products.find(
      ({id}) => id === Number(searchParamsURL.get("id"))
    );
    // console.log({nextProduct});
  }
  // let foundedProduct = products.find(({id}) => id === Number(searchParamsURL.get("id")));
  if (nextProduct) {
    searchParamsURL.set("name", slugify(nextProduct.name));
  }

  if (searchParams?.size) {
    searchParamsURL.set("size", searchParams.size);
  }
  return `/?${searchParamsURL.toString()}`;
}

function getHref(
  product: ProductType,
  size: string,
  urlSearchParams: URLSearchParams
) {
  let newParams = new URLSearchParams({
    ...Object.fromEntries(urlSearchParams),
    id: product.id.toString(),
    name: slugify(product.name),
    size: size,
  });
  return `/?${newParams.toString()}`;
}
