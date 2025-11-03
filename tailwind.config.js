/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B1C3D",
        accent: "#FFD700",
        accentHover: "#E6C200",
        textDark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
