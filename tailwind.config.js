/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53BD95",
        "primary-dark": "#2c785c",
        "port-primary": "#5E3BEF",
        "port-primary-second": "#5D3CEF",
        "primary-bg": "#FBFAFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [],
};
