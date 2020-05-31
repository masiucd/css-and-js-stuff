const magic = (num: number): Promise<number> => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 1000);
  });
};

async function* numbersFunc(): AsyncGenerator<number, void, unknown> {
  let index = 1;
  while (true) {
    yield index;
    index = await magic(index);
    if (index > 10) {
      break;
    }
  }
}

async function main2() {
  for await (let num of numbersFunc()) {
    console.log(num);
  }
}

main2();

export { magic, main2, numbersFunc };
