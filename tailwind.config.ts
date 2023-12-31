import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#0b721a',
        'secondary': '#3c8e48',
        'light-blue': '#f6fdfd',
        'dark-green': '#06390D'
      },
      padding: {
        18: '72px'
      },
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
    require("tailwindcss-inner-border"),
  ],
}
export default config
