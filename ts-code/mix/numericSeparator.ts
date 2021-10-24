const populationChina = 1_439_323_776;

let numberType = typeof populationChina; // number

export class Amount {
  private static MAX = 999_9999_9999;

  amount: number = 0;

  mix() {
    return this.amount + Amount.MAX;
  }
}

const a = new Amount();
