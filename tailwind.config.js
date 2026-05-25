/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "secondary": "#c7c6c6",
        "background": "#050505",
        "surface-card": "#121212",
        "outline-technical": "rgba(212, 175, 55, 0.2)",
        "gold-accent": "#D4AF37",
        "obsidian": "#050505",
        "charcoal": "#1A1A1A"
      },
      fontFamily: {
        "display-lg": ["Playfair Display", "serif"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"]
      },
      spacing: {
        "margin-desktop": "64px",
        "section-gap": "160px",
        "container-max": "1280px"
      }
    },
  },
  plugins: [],
}
