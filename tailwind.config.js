/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        zoomAnimation: "ZoomInOut 1s ease-in-out infinite",
        spin: "spin 2s linear infinite",
      },
      keyframes: {
        ZoomInOut: {
          "0%, 100%": { transform: "scale(1.1,1.1)" },
        },
      },
      backgroundImage: {
        "footer-gradient": "linear-gradient(to right, #0B6419 0%, #2BE848 50%)",
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
