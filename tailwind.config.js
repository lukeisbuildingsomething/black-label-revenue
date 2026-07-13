/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#16130F',
        gold: '#C9A227',
        cream: '#EDE6D8',
        'cream-bright': '#F3EDDF',
        muted: '#A89F8D',
        'muted-dark': '#6E665A',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
