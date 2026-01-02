/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        lt: { raw: "(width: 1024px) and (height: 1366px)" }, // Portrait
        "lt-landscape": { raw: "(width: 1366px) and (height: 1024px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide", "@tailwindcss/line-clamp")],
};
