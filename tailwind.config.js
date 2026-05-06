/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#050505",
          charcoal: "#0D0D0D",
          darkGray: "#141414",
          silver: "#A3A3A3",
          accent: "#FFFFFF",
          gold: "#D4AF37", // Subtle gold for selective accents
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        archivo: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'noise': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

