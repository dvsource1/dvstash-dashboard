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
        logo: "url('../public/logo/dv_stash_logo_white.png')",
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
        od_gray: '#abb2bf',
      },
    },
  },
  plugins: [],
}
