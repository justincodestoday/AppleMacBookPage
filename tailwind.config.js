/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "430px", // min-width
      desktop: "1280px",
      wide_desktop: "1920px",
    },
  },
  plugins: [],
};
