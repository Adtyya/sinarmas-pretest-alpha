/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-g": ["Inter", "sans-serif"],
      },
      fontSize: {
        "is-xl": 28,
        "is-l": 20,
        "is-s": 14,
        "is-m": 16,
      },
      screens: {
        "2xl": "1980px",
      },
    },
  },
  plugins: [],
};
