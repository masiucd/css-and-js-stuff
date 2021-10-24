interface Point {
  x: number;
  y: number;
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// createe a aalias

type PartialNullablePoint = Partial<Nullable<Point>>;

let point: Nullable<Point>;
point = { x: 0, y: 20 };
point = { x: null, y: 20 };
point = { x: 0, y: null };
point = { x: null, y: null };

let point2: PartialNullablePoint;
point2 = { x: 0, y: 20 };
point2 = { x: null, y: 20 };
point2 = { x: 0, y: null };
point2 = { x: null, y: null };
point2 = { x: null };
point2 = { x: undefined };

let numbers = [1, 2, 3, 4, 5];

// for (let a in numbers) {
//   console.log(a);
// }
