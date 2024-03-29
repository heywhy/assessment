module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      whitespace: ['first'],
      fontSize: ['first'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
