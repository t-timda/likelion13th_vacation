/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        ph: '360px',
        dt: '1440px',
      },
    },
  },
  plugins: [],
};
