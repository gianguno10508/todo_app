/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        a6c5e229: "#a6c5e229",
        "282e33": "#282e33",
        "1c2b41": "#1c2b41",
        "3d434a": "#3d434a",
      },
      textColor: {
        b6c2cf: "#b6c2cf",
        "9fadbc": "#9fadbc",
      },
      borderColor: {
        b6c2cf: "#b6c2cf",
      },
      maxHeight: {
        615: "615px",
      },
    },
  },
  plugins: [],
};
