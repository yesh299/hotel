/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(234, 179, 8, 0.18)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(234,179,8,0.18), transparent 40%), linear-gradient(135deg, rgba(10,15,30,0.94), rgba(5,7,12,0.98))",
      },
    },
  },
  plugins: [],
};
