import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#58C0D7",
        textSecondary: "#464646",
        primaryColor: "#58c0d7",
        backgroundColor: "#EEF9FB",
        foreground: "var(--foreground)",
        ash: "#787E81",
        "dark-ash": "#E6E6E6",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
