import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        'fd-plan': ' 0px 19px 35px 0px rgba(7, 1, 44, 0.20)',
      },
      colors: {
        'fd-gray-50': '#FFFFFF',
        'fd-gray-100': '#F9F9F9',
        'fd-gray-200': '#EFEFEF',
        'fd-gray-250': '#C9C9C9',
        'fd-gray-500': '#676767',
        'fd-gray-600': '#7A7A7A',
        'fd-gray-800': '#07012C',
        'fd-gray-900': '#131313',
        'fd-gray-950': '#000000',

        'fd-red-100': '#EEC4CE',
        'fd-red-400': '#F65A3B',
        'fd-red-600': '#EA1A4C',
        'fd-red-700': '#D11F4A',

        'fd-blue-500': '#5152B0',
        'fd-blue-600': '#372C7E',
        'fd-white-transparent': 'rgba(255,255,255,0.2)',
        'fd-black-transparent': 'rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
