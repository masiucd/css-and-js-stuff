type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithString = IsNumber<string>;

type UnboxList<T> = T extends Array<infer Member> ? Member : T;

type UnboxedList = UnboxList<number[]>;
type UnboxListString = UnboxList<string[]>;
type AnythingElse = UnboxList<boolean>;
