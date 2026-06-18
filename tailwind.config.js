/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundStart: "var(--bg-start)",
        backgroundEnd: "var(--bg-end)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        primary: "var(--primary)",
        accentGlow: "var(--accent-glow)",
        cardBg: "var(--card-bg)",
        cardBorder: "var(--card-border)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
