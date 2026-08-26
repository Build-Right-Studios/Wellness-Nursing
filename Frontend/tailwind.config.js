/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0B6E8F", dark: "#074E66", tint: "#E4F0F4" },
        secondary: { DEFAULT: "#4CAF7D", dark: "#357E58", tint: "#E7F6EE" },
        tertiary: { DEFAULT: "#F26B3A", dark: "#D9532A", tint: "#FDEAE1" },
      },
      fontFamily: {
        display: ["'EB Garamond'", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};