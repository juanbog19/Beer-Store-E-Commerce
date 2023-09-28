/** @type {import('tailwindcss').Config} */
export default {
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CB5930',
        secondary: '#212025',
        accent: '#E9E0D3',
        error: '#FF0000',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'abril': ['Abril Fatface', 'monospace'],
      }
    },
  },
  plugins: [
    ['prettier-plugin-tailwindcss'],
  ],
}

