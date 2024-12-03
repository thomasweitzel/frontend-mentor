/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.css", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed"],
      },
      colors: {
        "moderate-violet": "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        "light-gray": "hsl(0, 0%, 81%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      screens: {
        sm: "32em",
        md: "56em",
      },
      boxShadow: {
        "extra-large": "0 20px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(moderate-violet|very-dark-grayish-blue|very-dark-blackish-blue|light-gray|very-light-gray|light-grayish-blue|black|white)/,
    },
    "testimonial-bg",
    "daniel",
    "jonathan",
    "jeanette",
    "patrick",
    "kira",
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
