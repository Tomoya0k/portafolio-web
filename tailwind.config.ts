import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0b1220",
        panel: "#101a2d",
        borderSoft: "#1f2b45",
        accent: "#38bdf8",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.25), 0 10px 30px -12px rgba(56, 189, 248, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
