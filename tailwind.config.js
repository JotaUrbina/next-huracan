/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hnOrange: "#ff4a00",
        hnBlack: "#1c1c1c",
        hnGray: "#cdcdcd",
      },
    },
  },
  plugins: [],
};
