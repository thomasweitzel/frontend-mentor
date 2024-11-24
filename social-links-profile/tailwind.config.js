/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        gray: {
          700: "#333333",
          800: "#1f1f1f",
          900: "#141414",
        },
        green: {
          social: "#c5f82a",
        },
      },
      screens: {
        sm: "0px",
        md: "500px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
