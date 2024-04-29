/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["silkscreen", "sans-serif"],
        window: ["window", "sans-serif"],
        upheavtt: ["upheavtt", "sans-serif"],
        pixelifySans: ["pixelifySans", "sans-serif"],
        nimbus: ["nimbus", "sans-serif"],
      },
      colors: {
        primary: "#000060",
        textBlue: "#1C3786FF",
        secondary: "#ffdd8b",
        accent: "#ffdd8b",
        textGray: "#EAEAEA",
      },
      backgroundImage: {
        "btn-background": "url('/public/images/btn.png')",
      },
    },
  },
  plugins: [],
};
