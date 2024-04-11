/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#2980B9",
        hedingColor: "#E67E22",
        navbar: "#EBF5FB",
        textC: "#E67E22",
      },
      fontFamily: {
        sans: ["Source Sans 3"],
        josefin: ["Josefin Sans"],
        poppins:["Poppins"]
      },
    },
  },
  plugins: [ require("flowbite/plugin"),],
};
