interface Comment {
  date: Date;
  text: string;
}

let service: unknown;

const response = service;

if (typeof response === "string") {
  console.log(response.toUpperCase());
} else if (typeof response === "number") {
  console.log(response + 10);
}

// response + 20; // TS will not like this
