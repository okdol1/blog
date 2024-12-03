import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      colors: {
        "primay-text": "#F5F5F5",
      },
      maxWidth: {
        content: "800px",
      },
    },
  },
  plugins: [],
};
export default config;
