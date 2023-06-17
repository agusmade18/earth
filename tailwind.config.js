/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        malibu: {
          50: "#eff9ff",
          100: "#dff2ff",
          200: "#b8e8ff",
          300: "#78d6ff",
          400: "#47c8ff",
          500: "#06aaf1",
          600: "#0088ce",
          700: "#006ca7",
          800: "#025b8a",
          900: "#084c72",
          950: "#06304b",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
