/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/images/background-pattern-mobile.svg')",
        deskop: "url('/images/background-pattern-desktop.svg')",
      },
      fontFamily: {
        custom: ["work sans", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
