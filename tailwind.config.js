/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        sm: "1rem",
        lg: "1rem",
        xl: "0rem",
        "2xl": "0rem",
      },
      // you can configure the container to be centered
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "984px",
        "2xl": "970px",
        "3xl": "1170px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",

      "3xl": "1800px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        hero_pattern: "url('/HeroGrid.svg')",
        testimonialBg: "url('/testimonialBg.png')",
        testimonialBorderBg: "url('/TestimonialBorderBG.png')",
        footerBG: "url('/footerBG.png')",
        quesBg: "url('/QuesBG.png')",
        bannerBG: "url('/BannerBG.png')",
        priceHeaderBG: "url('/priceHeaderBG.svg')",
        stripGradient:
          "linear-gradient(to bottom, transparent 0%, transparent 20%, #FF0000 20%, #FF0000 80%, transparent 80%, transparent 100%)",
        stripeBG: "url('/icons/Rect.png')",
      },
      colors: {
        primary: "#008CCF",
        textPrimary: "#F8F8FF",
        textSecondary: "#94A2C9",
        bgPrimary: "#0C0C14",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
