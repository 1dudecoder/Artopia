/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.75rem", //12px
        base: "0.875rem", //14px
        xl: "1.125rem", //18px
        "2xl": "1.2188rem", //19.5px
        "3xl": "1.5rem", //24px
        "4xl": "2.5rem", //40px
      },
      fontFamily: {
        HindMadurai: ['"Custom Font"', "sans-serif", "Hind Madurai"],
        popin: ["Poppins", "sans-serif"],
      },
      screens: {
        tb: "1100px",
      },
    },
  },
  plugins: [],
};
