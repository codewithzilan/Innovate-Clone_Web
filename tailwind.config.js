/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'open': ["Open Sans","sans-serif"],
        'paprika':["Paprika","system-ui"],
      },
      colors: {
        'primary': '#1BBF00',
        'secondary':'#160C6D',
        'third':'#141135',
        'fourth':'#726E9E',
        'fifth':'#CBC8F0',
        'sixth':'#F6F5FF',
        'seven':'#6B62C5',
      },
      maxWidth: {
        'container': '1170px',
      },
      backgroundImage:{
        'banner':"url('./assets/banner.png')"
      },
    },
  },
  plugins: [],
}

