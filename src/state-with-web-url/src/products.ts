export type ProductType = (typeof products)[number];
// let sizes = Object.freeze(["xs", "sm", "md", "lg", "xl", "2xl"]);
export let products = Object.freeze([
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
