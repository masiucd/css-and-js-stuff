import Link from "next/link";

import {type ProductType} from "@/lib/api/data";
import {cn} from "@/lib/cn";
import {getHref} from "@/lib/util/product";

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
          "min-w-12 cursor-pointer rounded-md uppercase bg-gray-100  text-center font-bold  text-main-900 shadow p-1 hover:opacity-55 transition-opacity",
          available
            ? "opacity-100 pointer-events-auto"
            : "opacity-50 pointer-events-none ",
          selectedSize && "bg-main-700 text-main-100"
        )}
      >
        {size}
      </Link>
    </li>
  );
}
