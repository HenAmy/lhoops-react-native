/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F4B41A',
        secondary: '#141517',
        text: '#1A1B1E',
        gray: '#848484',
        border: '#CED4DA',
        placeholder: '#A0A0A0',
        background: '#C1C2C5',
        disabled: '#E2E2E2',
        modal: '#FBFBFB',
      },
      // fontFamily: {
      //   fredoka: ['Fredoka'],
      // },
    },
  },
  plugins: [],
};
