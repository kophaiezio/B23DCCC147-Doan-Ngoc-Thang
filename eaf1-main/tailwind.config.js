/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        site_text: '#DC2626',
        mclaren_orange: "#FF8000",
        ferrari_red: "#A6051A",
        mercedes_green: "#00A19C",
        astonMartin_green: '#00665E',
        redbull_blue: '#173084'
      },
      fontFamily: {
        F1R: ['F1-R', 'sans-serif'],
        F1W: ['F1-W', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      screens: {
        'xs': '480px', // Custom breakpoint for very small screens
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
