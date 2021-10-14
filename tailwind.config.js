module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#382B22',
      secondary: '#9E7521',
      danger: '#e3342f',
    }),
    rotate: {
      '-30': '-30deg',
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
