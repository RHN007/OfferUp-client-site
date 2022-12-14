/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0a756a",
          secondary: "#40916c",
          accent: "#95d5b2",
          neutral: "#d8f3dc",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "lemonade",
    ],
  },
  plugins: [require("daisyui")],
}
