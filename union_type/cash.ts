interface Cash {
  kind: "cash";
}
interface PayPal {
  kind: "paypal";
  email: string;
}
interface MasterCard {
  kind: "mastercard";
  cartNumber: string;
  securityCode: string;
}

type PaymentMethod = Cash | PayPal | MasterCard;

function handlePayment(payment: PaymentMethod): string {
  switch (payment.kind) {
    case "cash":
      return "Cash is king";
    case "paypal":
      return "Paypal is booo";
    case "mastercard":
      return "Master Card is okej";
  }
}

console.log(handlePayment({ kind: "cash" }));
console.log(
  handlePayment({
    kind: "mastercard",
    cartNumber: "213123",
    securityCode: "222",
  }),
);
console.log(handlePayment({ kind: "paypal", email: "logan@example.com" }));
