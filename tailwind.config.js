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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
