/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "primary-red": "#ea5353",
        "primary-cyan": "#45d3d3",
        "primary-orange": "#fcaf4a",
        "primary-blue": "#549ef2",
        "very-dark-blue": "#4c4e61",
        "grayish-blue": "#a3a5ae",
        "very-light-gray": "#fafafa",
      },
      screens: {
        sm: "900px",
      },
      boxShadow: {
        "extra-large": "0 20px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(primary-red|primary-cyan|primary-orange|primary-blue)/,
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
