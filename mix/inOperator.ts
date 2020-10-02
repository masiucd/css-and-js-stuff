interface Dog {
  id: string;
  name: string;
  cool: boolean;
}

interface Cat {
  color: string;
}

function getAnimal(animal: Dog | Cat) {
  // check if property exists in object
  if ("name" in animal) {
    print(animal.name);
  } else {
    print(animal.color);
  }
}

// helper type guard
const isDog = (animal: Dog | Cat): animal is Dog => {
  return (<Dog>animal).name !== undefined;
};

function print(outPut: string) {
  console.log(outPut);
}

const bobbyDog: Dog = {
  id: "@",
  name: "BobbyDog",
  cool: true,
};
const charlieCat: Cat = {
  color: "red",
};

getAnimal(bobbyDog);
getAnimal(charlieCat);
