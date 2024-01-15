/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beru-300':'#40aae7'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        codeStar: "url('https://raw.githubusercontent.com/BrandBeru/BrandBeru.github.io/main/src/assets/codeStar.png')",
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [],
}
