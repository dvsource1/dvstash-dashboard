/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('../public/img/logo/dv_stash_logo_white.png')",
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        od_red: '#e06c75',
        od_green: '#98c379',
        od_yellow: '#e5c07b',
        od_blue: '#61afef',
        od_purple: '#c678dd',
        od_pink: '#f472b6',
        od_cyan: '#56b6c2',
        od_black: '#282c34',
        od_black_95: '#353940',
        od_black_90: '#41454b',
        od_gray: '#abb2bf',
        od_black__gray_80: '#929aa6',
        od_black__gray_40: '#616570',
        od_black__gray_10: '#383c44',
        od_black__gray_5: '#2f353c',
        od_black_90__blue_40: '#4e7191',
        od_black__blue_80: '#5f97c8',
        od_black__yellow_20: '#544d43',
      },
    },
  },
  plugins: [],
}
