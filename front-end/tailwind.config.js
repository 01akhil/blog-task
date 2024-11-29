/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 5s steps(60) 1s forwards', // Adjust duration and steps for better control
        blink: 'blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

