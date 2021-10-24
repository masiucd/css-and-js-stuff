type StringOrNumber = string | number;

interface Person<StringOrNumber> {
  fullName: string;
  blog: string;
  twitter: string;
  age: StringOrNumber;
}

let mike: Person<number> = {
  fullName: "Mike Bolek",
  blog: "mikekomo",
  twitter: "mikeTwitter",
  age: 22,
};

const { fullName, ...rest } = mike;
