import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0E5D4A",
          red: "#A3232B",
          gold: "#D1A426",
          ocean: "#1C6E8C",
          offwhite: "#F8F5F0",
          charcoal: "#1D2428"
        }
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" }
    }
  },
  plugins: []
} satisfies Config;
