/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
    extend: {
      backgroundImage: {
        hero_pattern: "url('/HeroGrid.svg')",
        testimonialBg: "url('/testimonialBg.png')",
      },
      colors: {
        primary: "#008CCF",
        textPrimary: "#F8F8FF",
        textSecondary: "#94A2C9",
        bgPrimary: "#0C0C14",
      },
    },
  },
  plugins: [],
};
