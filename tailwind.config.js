/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Leve e Artesanal"
        brand: {
          50: '#f9f8f6',  // Fundo principal (quase branco/areia)
          100: '#f2efe9', // Fundo secundário
          200: '#e6dfd3', // Bordas sutis
          300: '#d1c2ab', // Detalhes
          500: '#a68e68', // Cor primária (dourado/bege escuro)
          800: '#5e4e35', // Textos principais
          900: '#3d3220', // Títulos
        }
      },
      fontFamily: {
        // Vamos usar fontes do Google Fonts depois
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Ótimo para títulos de moda/artesanato
      }
    },
  },
  plugins: [],
}