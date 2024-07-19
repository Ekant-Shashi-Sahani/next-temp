import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dbeafe',
          200: '#60a5fa',
          300: '#1e40af'
        },
        secondary: {
          100: '#dcfce7',
          200: '#4ade80',
          300: '#166534',
        }
      }
    },
  },
  plugins: [],
};
export default config;
