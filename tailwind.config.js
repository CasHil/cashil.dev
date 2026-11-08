const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/!(*.test).{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
          subtle: "var(--surface-subtle)",
        },
        border: {
          subtle: "var(--border-subtle)",
          hover: "var(--border-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        brand: {
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
          subtle: "var(--brand-subtle)",
          border: "var(--brand-border)",
        },
      },
      borderRadius: {
        "squircle-sm": "12px",
        squircle: "18px",
        "squircle-lg": "24px",
        "squircle-xl": "32px",
      },
      fontFamily: {
        serif: ['"Newsreader"', "Georgia", "serif"],
        display: ['"Newsreader"', "Georgia", "serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      slate: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      amber: colors.amber,
      cyan: colors.cyan,
      sky: colors.sky,
      teal: colors.teal,
    },
  },
  plugins: [],
};
