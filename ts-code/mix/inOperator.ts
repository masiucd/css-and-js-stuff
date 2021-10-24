export interface Dog {
  id: string;
  name: string;
  cool: boolean;
}

export interface Cat {
  color: string;
}

export function getAnimal(animal: Dog | Cat) {
  // check if property exists in object
  if ("name" in animal) {
    print(animal.name);
    return animal.name;
  } else {
    print(animal.color);
    return animal.color;
  }
}

// helper type guard
const isDog = (animal: Dog | Cat): animal is Dog => {
  return (<Dog>animal).name !== undefined;
};

function print(outPut: string) {
  console.log(outPut);
}

export const bobbyDog: Dog = {
  id: "@",
  name: "BobbyDog",
  cool: true,
};
export const charlieCat: Cat = {
  color: "red",
};

// getAnimal(bobbyDog);
// getAnimal(charlieCat);
