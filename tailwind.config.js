/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf7f2",
          100: "#f3ede2",
          200: "#e6d9c0",
          300: "#d6bf96",
          400: "#c9a56e",
          500: "#b9894d",
          600: "#a8723e",
          700: "#8b5a34",
          800: "#6e4830",
          900: "#4a3022",
        },
        ink: {
          DEFAULT: "#1f241e",
          light: "#3a4038",
          muted: "#6b7268",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
