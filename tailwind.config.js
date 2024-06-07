/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'PublicSans' : ['Public Sans', 'sans-serif']
      },
      colors: {
        'Dark-Blue' : '#2d314d',
        'Lime-Green' : '#31d35c',
        'Bright-Cyan' : '#2bb7da',
        'Grayish-Blue': '#9698a6',
        'Light-Grayish-Blue' : '#f3f4f6',
        'Very-Light-Gray' : '#fafafa'
      }
    },
  },
  plugins: [],
}

