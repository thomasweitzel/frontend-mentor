/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        slate: {
          300: "#d6e2f0",
          500: "#68778d",
          900: "#1f3251",
        },
      },
      height: {
        'card': '500px',
        'image': '288px',
      },
      width: {
        'card': '320px',
        'image': '288px',
      },
      fontSize: {
        'card-big': '22px',
        'card-small': '15px',
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
