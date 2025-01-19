/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#298A1C", 
          light: "#E2F9DF", // Variante plus claire
          dark: "#BBF0B5", // Variante plus foncée
        },
        secondary: {
          DEFAULT: "#f3f4f6", // Gris clair pour les fonds ou textes secondaires
          dark: "#6b7280", // Gris foncé pour les bordures ou textes
        },
        background: "#ffffff", // Fond blanc pur
        text: {
          primary: "#000000", // Noir pour le texte principal
          secondary: "#6b7280", // Gris pour le texte secondaire
        },
      },
    },
    plugins: [],
  },
};