/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'intro-pattern': "url('/src/assets/images/banner.jpg')",
        'footer-pattern':
          'linear-gradient(265.08deg, #95390C 14.9%, #5328A1 68.95%);',
      },
    },
  },
  plugins: [],
};
