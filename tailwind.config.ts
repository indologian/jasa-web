import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#FFF0D1",
        secondary: "#795757",
        variant1: "#664343",
        variant2: "#3B3030",
        darkPrimary: "#0f172a",
        darkSecondary: "#1e293b",
        darkVariant: "#475569",
        lightPrimary: "#f8fafc",
        lightSecondary: "#f1f5f9",
      },
    },
  },
};
