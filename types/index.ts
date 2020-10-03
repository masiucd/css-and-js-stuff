type Pet = {
  walk(): void;
};

interface Marine {
  hasNightVision: boolean;
}

interface Cat extends Pet, Marine {
  name: string;
}

const garfield: Cat = {
  hasNightVision: true,
  name: "Garfield",
  walk() {
    return "walk walk";
  },
};

type CatType = Pet & Marine;

const anotherCat: CatType = {
  hasNightVision: false,
  walk: () => "walkie walkie",
};
