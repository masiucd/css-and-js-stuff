import {products, type ProductType} from "@/data";

export function getOrDefault<T>(
  params: URLSearchParams,
  key: string,
  defaultValue: T
) {
  let value = params.get(key);
  return value === null ? defaultValue : value;
}

export function buildUrlString(searchParams?: Record<string, string>) {
  if (!searchParams) {
    return "";
  }
  return Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getHrefForArrow(
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

export function getHref(
  product: ProductType,
  size: string,
  params: URLSearchParams
) {
  let newParams = new URLSearchParams({
    ...Object.fromEntries(params),
    id: product.id.toString(),
    name: slugify(product.name),
    size: size,
  });
  return `/?${newParams.toString()}`;
}
