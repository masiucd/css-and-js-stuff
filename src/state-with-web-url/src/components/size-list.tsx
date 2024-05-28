import Link from "next/link";

import {cn} from "@/lib/cn";
import {getHref} from "@/lib/util/product";
import {type ProductType} from "@/products";

export function SizeList({
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
