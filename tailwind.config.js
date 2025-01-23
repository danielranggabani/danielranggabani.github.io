/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',"./node_modules/flowbite/**/*.js","./Components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: '16px',
      width: {
        '128': '30rem',
      }

    },
    extend: {
      colors : {
        red500: '#ff2929',
        red200: '#ffc2c2',
        redring: '#d20303',
        red50: '#fff0f0',
        red100: '#ffdede',
        dark : '#020617',
        primary : '#F91010',
        seconary : '#0E0548',
        tiga : '#64748b',
        empat : '#1e293b',
        lima : '#fff0f0'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

