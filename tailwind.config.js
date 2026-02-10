/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A87E2',
          dark: '#0868b3',
          light: '#4db8ff'
        },
        dark: {
          bg: '#0a0e27',
          bg2: '#1a1f3a',
          bg3: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif']
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'train-move': 'trainMove 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' }
        },
        trainMove: {
          '0%': { left: '-50%' },
          '100%': { left: '150%' }
        }
      }
    }
  },
  plugins: []
}
