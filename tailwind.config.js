/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        light_orange : "#F6EDEE" ,
        light_gray : "#A6A6A8" ,
        dark_orange: "#B53C43",
        dark_gray : "#48494B",
        airbnb_red : "#FF385C",
        dark_red : "#B53C43"
      }
    },
  },
  plugins: [],
};