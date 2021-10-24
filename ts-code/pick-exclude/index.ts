type Item = {
  name: string
  desc: string
  price: number
  inStock: boolean
  image: string
}

// type with only name and price, from Item type
type ItemPreview = Pick<Item, "name" | "price">

const preview: ItemPreview = {
  name: "Daim chocolate",
  price: 1.45,
}

type ImageItem = Omit<Item, "inStock" | "desc" | "inStock">

const image: ImageItem = {
  name: "bg.jpeg",
  price: 45,
  image: "landscape",
}
