/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      colors: {
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      boxShadow: {
        "extra-large": "0 20px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        md: "800px",
      },
      width: {
        mobile: "328px",
        desktop: "780px",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(very-dark-grayish-blue|desaturated-dark-blue|grayish-blue|light-grayish-blue|black|white)/,
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
