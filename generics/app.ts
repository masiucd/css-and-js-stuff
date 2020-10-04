type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

let xs: StringsOrNumbers = [1, 2, 3, 4, 5];

interface FootballTeam {
  id: string;
  scores: number[];
}

interface SuperHero {
  id: number;
  power: string;
}

interface ItemSerice {
  getItem: <T extends string | number>(
    id: T,
  ) => T extends string ? FootballTeam : SuperHero;
}

let itemService: ItemSerice;

const footBallTeam = itemService.getItem("2121");
const batman = itemService.getItem(2);
