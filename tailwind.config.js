/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTheme: {
          theme1: "#29aa98",
          theme2: "#6db920",
        },
      },
    },
  },
  plugins: [],
};
