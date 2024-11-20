import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transformStyle: {
        "3d": "preserve-3d",
      },
      animation: {
        moveVertical: "moveVertical 30s ease infinite",
        moveInCircle: "moveInCircle 20s linear infinite",
        moveInCircleReverse: "moveInCircle 40s linear infinite reverse",
        moveHorizontal: "moveHorizontal 40s ease infinite",
      },
      keyframes: {
        moveVertical: {
          "0%, 100%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveHorizontal: {
          "0%, 100%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        'custom-blue': '#484b6a',
        'custom-gray': '#9394a5',
        'custom-slate': '#d2d3db',

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".backface-hidden": {
    //       "backface-visibility": "hidden",
    //     },
    //     ".perspective-1000": {
    //       perspective: "1000px",
    //     },
    //     ".transform-style-preserve-3d": {
    //       "transform-style": "preserve-3d",
    //     },
    //     ".rotate-y-180": {
    //       transform: "rotateY(180deg)",
    //     },
    //     ".transform-style-3d": {
    //       "transform-style": "preserve-3d",
    //     },
    //   };
    //   addUtilities(newUtilities);
    // },
  ],
};
export default config;
