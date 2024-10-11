/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily: {
        primary: "Poppins",
      },
      colors: {
        primary: "#ee1e27",
        secondary: "#282828",
        accent: {
          DEFAULT: "#ff343d",
          secondary: "#ff646b",
          tertiary: "#c80d15",
        },
        black: "#010B13",
      },
      backgroundImage: {
        about: "url()",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
