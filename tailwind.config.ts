import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        labrada: ["--font-labrada"],
        lancelot: ["--font-lancelot"],
        novaCut: ["--font-nova-cut"],
      },
    },
  },
  plugins: [],
} satisfies Config;
