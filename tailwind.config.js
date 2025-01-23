/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

