type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

interface ItemType {
  name: string
  desc: string
  price: number
  inStock: boolean
  image: string
}

interface TeamType {
  name: string
  ultras: string
  created: number
}

type TeamTypeReadOnly = MyReadOnly<TeamType>

const item: Readonly<ItemType> = {
  name: "foo",
  desc: "bar",
  price: 2,
  inStock: true,
  image: "image",
}

// No allowed!
// item.image = ""

const legiaCwks: TeamTypeReadOnly = {
  name: "Legia",
  ultras: "Zyleta",
  created: 1916,
}

// Not allowed!
// legiaCwks.name = 'legia'
