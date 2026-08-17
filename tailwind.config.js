/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1f4a35",
          foreground: "#f7f4ee",
        },
        accent: {
          DEFAULT: "#c0652f",
          foreground: "#fdf8f2",
        },
        muted: {
          DEFAULT: "#f0ebe2",
          foreground: "#6b665c",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2a2824",
        },
        background: "#faf7f1",
        foreground: "#2a2824",
        border: "#e6e0d4",
        secondary: "#efe9dd",
        ring: "#1f4a35",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
};
