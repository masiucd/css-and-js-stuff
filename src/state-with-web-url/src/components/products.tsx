"use client";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {PropsWithChildren} from "react";

import {Icons} from "@/components/icons";
import {cn} from "@/lib/cn";
import {slugify} from "@/lib/util/slugify";

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
  let paramSize = getOrDefault(params, "size", null);
  let product = products.find(({id}) => id === paramsId) ?? products[0];

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
          paramSize={paramSize}
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
  paramSize,
  params,
  searchParams,
}: {
  product: ProductType;
  paramsId: number;
  paramSize: string;
  params: URLSearchParams;
  searchParams?: Record<string, string>;
}) {
  let url = new URLSearchParams(params.toString());
  if (searchParams) {
    url.set("size", paramSize);
  }
  // TODO:
  console.log("url", url.toString());
  return (
    <ul className="flex gap-2">
      {product.amiableSizes.map(({size, available}) => {
        let selectedSize = paramsId === product.id && size === paramSize;
        return (
          <li key={size}>
            <Link
              href={getHref(product, size, params.toString())}
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
      })}
    </ul>
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

function getHref(product: ProductType, size: string, urlParams: string) {
  let searchParamsURL = new URLSearchParams(urlParams);
  searchParamsURL.set("id", product.id.toString());
  searchParamsURL.set("name", slugify(product.name));
  searchParamsURL.set("size", size);
  return `/?${searchParamsURL.toString()}`;
}

type ProductType = (typeof products)[number];
// let sizes = Object.freeze(["xs", "sm", "md", "lg", "xl", "2xl"]);
let products = Object.freeze([
  {
    id: 1,
    name: "Black shirt Uno",
    imageUrl: "/shirt-black.jpg",
    amiableSizes: [
      {
        size: "xs",
        available: true,
      },
      {
        size: "sm",
        available: true,
      },
      {
        size: "md",
        available: true,
      },
      {
        size: "lg",
        available: true,
      },
      {
        size: "xl",
        available: true,
      },
      {
        size: "2xl",
        available: false,
      },
    ],
    price: 100.25,
  },
  {
    id: 2,
    name: "White shirt",
    imageUrl: "/shirt-white.jpg",
    amiableSizes: [
      {
        size: "xs",
        available: true,
      },
      {
        size: "sm",
        available: true,
      },
      {
        size: "md",
        available: true,
      },
      {
        size: "lg",
        available: true,
      },
      {
        size: "xl",
        available: true,
      },
      {
        size: "2xl",
        available: true,
      },
    ],
    price: 200.0,
  },
  {
    id: 3,
    name: "Black shirt Dos",
    imageUrl: "/shirt-black-two.jpg",
    amiableSizes: [
      {
        size: "xs",
        available: true,
      },
      {
        size: "sm",
        available: true,
      },
      {
        size: "md",
        available: true,
      },
      {
        size: "lg",
        available: true,
      },
      {
        size: "xl",
        available: true,
      },
      {
        size: "2xl",
        available: true,
      },
    ],
    price: 120.55,
  },
  {
    id: 4,
    name: "Cat shirt",
    imageUrl: "/shirt-cat.jpg",
    amiableSizes: [
      {
        size: "xs",
        available: true,
      },
      {
        size: "sm",
        available: true,
      },
      {
        size: "md",
        available: true,
      },
      {
        size: "lg",
        available: true,
      },
      {
        size: "xl",
        available: true,
      },
      {
        size: "2xl",
        available: true,
      },
    ],
    price: 150.75,
  },
]);
