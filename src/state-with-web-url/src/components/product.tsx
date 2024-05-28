import Image from "next/image";
import Link from "next/link";
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

function buildUrlString(searchParams?: Record<string, string>) {
  if (!searchParams) {
    return "";
  }
  return Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

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
}: {
  product: ProductType;
  searchParams: Record<string, string> | undefined;
  urlSearchParams: URLSearchParams;
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
      >
        <span>
          <Icons.ArrowRight />
        </span>
      </ArrowLink>
    </div>
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
  // let urlSearchParams = new URLSearchParams(params.toString());
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
            params={params}
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
  params,
}: {
  size: string;
  available: boolean;
  selectedSize: boolean;
  product: ProductType;
  params: URLSearchParams;
}) {
  return (
    <li>
      <Link
        href={getHref(product, size, params)}
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

function getHrefForArrow(
  product: ProductType,
  direction: "left" | "right",
  searchParams: Record<string, string> | undefined,
  params: URLSearchParams
) {
  let newId = direction === "left" ? product.id - 1 : product.id + 1;
  params.set("id", newId.toString());

  let nextProduct = products.find(({id}) => id === newId);

  if (nextProduct) {
    params.set("name", slugify(nextProduct.name));
  }

  if (searchParams?.size) {
    params.set("size", searchParams.size);
    params.delete("size");
  }

  return `/?${params.toString()}`;
}

function getHref(product: ProductType, size: string, params: URLSearchParams) {
  let newParams = new URLSearchParams({
    ...Object.fromEntries(params),
    id: product.id.toString(),
    name: slugify(product.name),
    size: size,
  });
  return `/?${newParams.toString()}`;
}
