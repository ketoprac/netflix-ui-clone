/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      title: ["Volkhov", "serif"],
    },
    extend: {
      boxShadow: {
        'button': '0px 5px 25px'
      },
      colors: {
        dark: "#1A1C22",
        red1: "#BC0E19",
        red2: "#DB202C",
        red3: "#c01e2980",
        gray1: "#1F2127",
        gray2: "#373A43",
        newWhite: "#FEF4F4"
      },
    },
  },
  plugins: [],
};
