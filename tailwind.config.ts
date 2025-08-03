import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B6055',
          light: '#5EEAD4',
          dark: '#0F766E',
        },
        background: {
          DEFAULT: '#FFFFFF',
          muted: '#F9FAFB',
        },
        text: {
          DEFAULT: '#1F2937',
          muted: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 