interface OKeyValue {
  [key: string]: number
}

// a set of four specific things
type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | {red: number; green: number; blue: number}

// Give us just the strings
type StringColors = Extract<FavoriteColors, string>
// minimum retirement
type ObjectColors = Extract<FavoriteColors, {red: number}>
type TupleColors = Extract<FavoriteColors, [number, number, number]>

type NonStringColors = Exclude<FavoriteColors, string>
type NonStringColorsAndRecords = Exclude<FavoriteColors, string | OKeyValue>
