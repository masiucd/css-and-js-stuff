"use client";

import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

import {Icons} from "@/components/icons";
import {cn} from "@/lib/cn";
import {isDivisibleBy, isEven, isOdd} from "@/lib/util/even-odd";
import {slugify} from "@/lib/util/slugify";

function getOrDefault<T>(
  params: URLSearchParams,
  key: string,
  defaultValue: T
) {
  let value = params.get(key);
  return value === null ? defaultValue : value;
}

export function Products() {
  let params = useSearchParams();
  let paramsId = Number(getOrDefault(params, "id", 0));
  // let paramName = getOrDefault(params, "name", null);
  // let paramSize = getOrDefault(params, "size", null);
  // let [currentProductIndex, setCurrentProductIndex] = useState(paramsId);
  // let [productIds, setProductIds] = useState(products.map(({id}) => id));

  let product = products[paramsId - 1];

  // console.log(
  //   "params",
  //   params.forEach((s) => {
  //     console.log(s);
  //   })
  // );

  // let x = new URLSearchParams(window.location.search);
  // console.log(
  //   "x",
  //   x.forEach((p) => console.log(p))
  // );

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 px-2 py-4">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-xl font-semibold">${product.price}</p>
        <div className="my-5 flex min-h-[25rem]  gap-4 border-2 py-5">
          <Link
            aria-disabled={product.id === 1}
            className={cn(
              "cursor-pointer",
              product.id === 1 ? "pointer-events-none" : "pointer-events-auto"
            )}
            href={`/?id=${product.id - 1}&name=${slugify(product.name)}&size=xl`}
            // onClick={() => {
            //   setCurrentProductIndex((prev) =>
            //     prev === 0 ? products.length - 1 : prev - 1
            //   );
            // }}
          >
            <span>
              <Icons.ArrowLeft />
            </span>
          </Link>
          <div className="w-60">
            <Image
              src={product.imageUrl}
              alt="Black shirt Uno"
              width={500}
              height={500}
              className="rounded-md  object-fill "
            />
          </div>
          <Link
            aria-disabled={product.id === products.length}
            className={cn(
              "cursor-pointer",
              product.id === products.length
                ? "pointer-events-none"
                : "pointer-events-auto"
            )}
            href={`/?id=${product.id + 1}&name=${slugify(product.name)}&size=xl`}
            // onClick={() => {
            //   setCurrentProductIndex((prev) =>
            //     prev === products.length - 1 ? 0 : prev + 1
            //   );
            // }}
          >
            <span>
              <Icons.ArrowRight />
            </span>
          </Link>
        </div>
        <ul className="flex gap-2">
          {sizes.map((size) => {
            return (
              <li
                key={size}
                className={cn(
                  "min-w-12 cursor-pointer rounded-md bg-main-950 p-2 text-center font-bold  text-main-50 shadow",
                  product.amiableSizes.includes(size)
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-50 pointer-events-none",
                  Number(paramsId) === product.id ? "bg-red-500" : "bg-main-950"
                )}
              >
                <Link
                  href={`/?id=${product.id}&name=${slugify(product.name)}&size=${size}`}
                >
                  {size}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <ul className="flex border-2 border-red-600">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="flex flex-col items-center justify-center  bg-blue-200"
            >
              <h2 className="text-3xl font-semibold">{product.name}</h2>
              <p className="text-xl font-semibold">${product.price}</p>
              <div className="my-5 flex gap-4">
                <button>
                  <span>
                    <Icons.ArrowLeft />
                  </span>
                </button>
                <Image
                  src="/shirt-black.jpg"
                  alt="Black shirt Uno"
                  width={300}
                  height={300}
                />
                <button>
                  <span>
                    <Icons.ArrowRight />
                  </span>
                </button>
              </div>

              <ul className="flex gap-2">
                {sizes.map((size) => {
                  return (
                    <li
                      key={size}
                      className={cn(
                        "min-w-12 cursor-pointer rounded-md bg-main-950 p-2 text-center font-bold  text-main-50 shadow",
                        product.amiableSizes.includes(size)
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-50 pointer-events-none"
                      )}
                    >
                      <Link
                        href={`/?id=${product.id}&name=${slugify(product.name)}&size=${size}`}
                      >
                        {size}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

let sizes = Object.freeze(["xs", "sm", "md", "lg", "xl", "2xl"]);
let products = Object.freeze([
  {
    id: 1,
    name: "Black shirt Uno",
    imageUrl: "/shirt-black.jpg",
    amiableSizes: sizes.filter((_, i) => isEven(i)),
    price: 100.25,
  },
  {
    id: 2,
    name: "White shirt",
    imageUrl: "/shirt-white.jpg",
    amiableSizes: sizes.filter((_, i) => isOdd(i)),
    price: 200.0,
  },
  {
    id: 3,
    name: "Black shirt Dos",
    imageUrl: "/shirt-black-two.jpg",
    amiableSizes: sizes.filter((_, i) => isDivisibleBy(i, 3)),
    price: 120.55,
  },
  {
    id: 4,
    name: "Cat shirt",
    imageUrl: "/shirt-cat.jpg",
    amiableSizes: sizes.filter((_, i) => isDivisibleBy(i, 2)),
    price: 150.75,
  },
]);
