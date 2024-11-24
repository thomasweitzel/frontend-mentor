/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree"],
      },
      colors: {
        slate: {
          300: "#d6e2f0",
          500: "#68778d",
          900: "#1f3251",
        },
      },
      screens: {
        sm: "0px",
        md: "600px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
