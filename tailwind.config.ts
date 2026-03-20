import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        graphite: "#3A3A3A",
        marble: "#F5F2EE",
        brass: "#C9A96E",
        "brass-light": "#D4B87A",
        "warm-white": "#FAF8F5",
      },
    },
  },
  plugins: [],
};

export default config;