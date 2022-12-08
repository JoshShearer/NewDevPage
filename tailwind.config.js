module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    [require('daisyui')],
  ],
  variants: {
    extend: {
      visibility: ['group-hover'],
    }
  },
}
