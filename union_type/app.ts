type Result =
  | { success: true; value: string | number }
  | { success: false; error: string };

type Result2<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function foo(text: string): Result2<string> {
  if (text.match(/[^abc]/gi)) {
    return { success: true, value: "match of " + text };
  }
  return { success: false, error: "not a match" };
}

// console.log(foo("apa"));
let res = foo("42");

// if (res.success) {
//   res;
// } else {
//   res.error;
// }
