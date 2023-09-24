/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        euclid: ["Euclid Circular A", "Poppins"],
      },
      colors: {
        "main-green": "#217074",
        "main-dark-green": "#15494C",
        "soft-white": "#F3F3F3",
        "soft-black": "#333333",
        "beig": "#F0D8BB",
        "beig-dark": "#C8B49C",
      },
    },
  },
  plugins: [],
};
