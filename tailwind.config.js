/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBackground: 'url(../assets/images/main.png)',
      },
    },
    colors: {
      red: '#990000',
      red1: '#AF080B',
      red2: '#f11e2c',

      green: '#4BA865',
      lime: '#00FF7F',

      black: '#000000',
      white: '#ffffff',
      background: '#EEEEEE',
    },
    fontFamily: {
      greatPrimer: ['"IM Fell Great Primer SC"', 'serif'],
      lobster: ['Lobster', 'sans-serif'],
    },
  },
  plugins: [],
}
