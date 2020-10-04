const currencySymbols = {
  GBP: "£",
  USD: "$",
  EUR: "€",
};
type CurrencySymbol = keyof typeof currencySymbols;

let x: CurrencySymbol = "GBP";

const dogs = ["bobby", "johnny"] as const;
const dogs2 = <const>["logan", "jimmy"];

const locales = <const>[
  {
    locale: "pl",
    language: "Polish",
  },
  {
    locale: "en",
    language: "English",
  },
];

type Locale = typeof locales[number]["locale"];
type Lang = typeof locales[number]["language"];

let language: Lang = "Polish";
