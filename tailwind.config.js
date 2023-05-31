/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#0e0f10",
        "green": "#25ca7f",
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
