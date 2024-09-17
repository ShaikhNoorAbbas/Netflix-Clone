/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      extend: {
        animation: {
          "fade-in": "fadeIn 300ms ease-in-out",
          "fade-in-slow": "fadeIn 500ms ease-in-out",
          "fade-in-slower": "fadeIn 700ms ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
        },
      },
    },
  },
  plugins: [],
};
