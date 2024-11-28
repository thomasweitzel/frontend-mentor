/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        fraunces: ["Fraunces"],
      },
      colors: {
        "dark-cyan": "#3c8067",
        "hover-cyan": "#1a4031",
        cream: "#f2ebe3",
        "very-dark-blue": "#1c232b",
        "dark-grayish-blue": "#6c7289",
      },
      screens: {
        md: "640px",
      },
      width: {
        mobile: "344px",
        desktop: "600px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
