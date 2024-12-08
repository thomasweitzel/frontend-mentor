/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,css}", "./public/**/*.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      fraunces: ["Fraunces"],
    },
    extend: {},
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
