interface Person {
  name: string;
  age: number;
  cool: boolean;
  friends: string[];
}

const mike: Person = {
  name: 'Mike',
  age: 22,
  cool: true,
  friends: ['Tina', 'Stina', 'Boris'],
};

export { mike, Person };
