interface Fruit {
  id: number
  name: string
  color: string
}

type FruitCatalog = {[key in "grape" | "orange"]: Fruit}

function printFruit(catalog: FruitCatalog) {
  catalog.grape // ok
  catalog.orange // ok
  catalog.banana //not ok
}
