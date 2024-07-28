/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      theme: ["Volkhov"],
    },
    extend: {
      colors: {
        "primary-gray": "#484848",
        "secondary-gray": "#8A8A8A",
      },
    },
  },
  plugins: [],
};
