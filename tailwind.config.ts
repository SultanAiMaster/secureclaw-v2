import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./public/**/*.{jpg, jpeg, png, svg, ico}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: '#FCFBFD',
          100: '#FFFFFF',
          main: '#2C2C2C'
        },
        frontColor: {
          main: '#2196F3'
        },
        backgroundColors: {
          primary: '#4F46E5',
          secondary: '#45A049',
          accent: '#1E88E5',
          muted: '#667085',
          light: '#8BACCC',
          dark: '#0F172A',
          lightest: '#F1F5F9'
        },
        grayScale: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        }
      }
    }
  },
  plugins: [],
}

export default config