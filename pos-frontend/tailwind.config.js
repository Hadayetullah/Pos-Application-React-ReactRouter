/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "pos-sm": "450px",
      "pos-md": "825px",
      "pos-lg": "950px",
      "pos-xl": "1051px",
      "pos-2xl": "1151px",
    },
    extend: {},
  },
  plugins: [],
};
