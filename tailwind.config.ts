import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.slate,
      },
      backgroundImage: {
        "hero-pattern": "url('/images/iii.jpg')",
      },
      keyframes: {
        shake: {
          "0%, 100%": {transform: "translateX(0)"},
          "10%, 30%, 50%, 70%, 90%": {transform: "translateX(-10px)"},
          "20%, 40%, 60%, 80%": {transform: "translateX(10px)"},
        },
      },
      animation: {
        "bounce-once": "bounce 1s 1",
        "shake-once": "shake 1s 1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
