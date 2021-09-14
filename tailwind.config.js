module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "'Quicksand', sans-serif",
      },
      colors: {
        primary: {
          light: "#245BF610",
          DEFAULT: "#245BF6",
        },
        gray: {
          light: "#f7fafc",
          DEFAULT: "#ebf0f6",
        },
        dark: {
          light: "#7d7c81",
          DEFAULT: "#082c3d",
        },
        divider: "#dee2e6",
        red: {
          DEFAULT: "#ED584F",
        },
        green: {
          DEFAULT: "#29BB89",
        },
        yellow: {
          DEFAULT: "#fac800",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
