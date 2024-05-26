/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans"],
        syne: ["Syne", "sans"],
        sfui: ["SFUI", "sans"],
      },
    },
    backgroundImage: {
      background1: "url('resources/backgrounds/Rectangle 2.svg')",
      background2: "url('resources/backgrounds/Rectangle 3.svg')",
      background3: "url('resources/backgrounds/XMLID_2_.svg')",
      background4: "url('resources/backgrounds/XMLID_17_.svg')",
      blob: "url('resources/backgrounds/blob.svg')",
      bit1: "url('resources/backgrounds/bit 1.svg')",
      bit2: "url('resources/backgrounds/bit 2.svg')",
      strip1: "url('resources/backgrounds/Strip 1.svg')",
      strip2: "url('resources/backgrounds/Strip 2.svg')",
      backgroundStrip1: "url('resources/backgrounds/Background Strip 1.svg')",
      backgroundStrip2: "url('resources/backgrounds/Background Strip 2.svg')",
      profile: "url('resources/backgrounds/Image Backgroung.svg')",
      footerBackground: "url('resources/backgrounds/footer-background.svg')",
      footerStrips: "url('resources/backgrounds/footer-strips.svg')",
    },
  },
  plugins: [],
};
