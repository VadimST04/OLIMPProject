/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        euclid: ["Euclid Circular A", "Poppins"],
      },
      colors: {
        "main-green": "#217074",
        "main-dark-green": "#15494C",
        "white-green": "#E8EDE7",
        "soft-white": "#F3F3F3",
        "soft-white-hover": "#E5E5E5",
        "soft-black": "#333333",
        "soft-black-hover": "#252525",
        beig: "#F0D8BB",
        "beig-dark": "#C8B49C",
      },
    },
  },
  plugins: [],
};
