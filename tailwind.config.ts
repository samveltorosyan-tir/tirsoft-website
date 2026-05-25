import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#ffffff",
          2: "#f5f5f7",
          3: "#ebebed",
        },
        ink: {
          DEFAULT: "#1b1815",
          2: "#2a2620",
        },
        graphite: {
          DEFAULT: "#5a554d",
          2: "#837c70",
        },
        violet: {
          DEFAULT: "rgb(139,51,255)",
          dark: "#6b1fd4",
        },
        sky: {
          DEFAULT: "rgb(29,161,244)",
          dark: "#0f8fd4",
        },
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        "serif-italic": ["var(--font-instrument-serif)", "serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,.07)",
        "card-hover": "0 8px 32px rgba(0,0,0,.08)",
        btn: "0 6px 20px rgba(139,51,255,.25)",
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, rgb(139,51,255) 0%, rgb(29,161,244) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
