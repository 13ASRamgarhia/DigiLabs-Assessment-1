/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',  
        'laptop': '1024px',
        'desktop': '1280px',
        'HD': '1920px',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        bgColor: "rgba(255, 250, 255, 1)",
        logoColor: "#9D0AFF",
        headingColor: "#151531",
        subHeadingColor: "rgba(21, 21, 49, 0.8)",
        teamGrad: "linear-gradient(90deg, #FFFAFF 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, #FFFAFF 100%)",
        overviewDivColor: "rgba(21, 21, 49, 1)",
        overviewContentColor: "rgba(255, 250, 255, 0.1)",
        checkColor1: "rgba(157, 10, 255, 1)",
        checkColor2: "rgba(0, 245, 155, 1)",
        HBhoverColor: "#7a15bd",
      },
      animation: {
        marquee1: 'marquee1 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
      },
      keyframes: {
        marquee1: {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require("daisyui"),],
};
