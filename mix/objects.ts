interface Dog {
  name: string;
  breed: string;
}

interface Dogs {
  [dog: string]: Dog;
}

const dogs: Dogs = {
  pysia: {
    name: "Pysia",
    breed: "Sznauzer",
  },
  boris: {
    name: "Boris",
    breed: "Pug",
  },
  linda: {
    name: "Linda",
    breed: "Schaufer",
  },
};

for (let [key, val] of Object.entries(dogs)) {
  console.log(key, val);
}
