interface Dog {
  name: string;
}
interface Container<T> {
  unit: T;
}

interface Bird extends Dog {
  color: string;
}

const birdy: Bird = {
  name: 'Birdy',
  color: 'green',
};

const myContainer: Container<number> = {
  unit: 22,
};
