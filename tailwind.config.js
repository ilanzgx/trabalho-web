/** @type {import('tailwindcss').Config} */
// npx tailwindcss -o css/tailwind-optimized.css --minify
module.exports = {
  content: [
    './*.{html,js}',
    './js/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

