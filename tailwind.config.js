/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    screens: {
      'xsm': {'min': '240px', 'max': '280px'},
      'sm': {'min': '350px', 'max': '539px'},
      'md': {'min': '540px', 'max': '820px'},
      'lg': {'min': '820px', 'max': '1023px'},
      'xl': {'min': '1024px', "max": "1220px"},
      'xxl': {'min': '1221px'}
    },
  }
}
