/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        content: {
          primary: "rgba(var(--content-primary) / <alpha-value>)",
          secondary: "rgba(var(--content-secondary) / <alpha-value>)",
          success: "rgba(var(--content-success) / <alpha-value>)"
        },
        background: {
          gray: "rgba(var(--bg-gray) / <alpha-value>)"
        },
        primary: "rgba(var(--primary) / <alpha-value>)"
      },
      fontFamily: {
        inter: "'Inter', sans-serif"
      }
    }
  },
  plugins: []
}
