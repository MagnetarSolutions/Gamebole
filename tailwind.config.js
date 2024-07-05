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
      topWhiteWaves: "url('resources/backgrounds/Rectangle 2.png')",
      topTransition: "url('resources/backgrounds/Rectangle 3.svg')",
      topDarkWaves: "url('resources/backgrounds/XMLID_2_.svg')",
      middleDarkWaves: "url('resources/backgrounds/XMLID_17_.svg')",
      blob: "url('resources/backgrounds/blob.svg')",
      backgroundStrip1: "url('resources/backgrounds/Background Strip 1.svg')",
      backgroundStrip1Dark:
        "url('resources/backgrounds/Background Strip 1 Dark.svg')",
      backgroundStrip2: "url('resources/backgrounds/Background Strip 2.svg')",
      backgroundStrip2Dark:
        "url('resources/backgrounds/Background Strip 2 Dark.svg')",
      profile: "url('resources/backgrounds/Image Backgroung.svg')",
      footerBackground: "url('resources/backgrounds/footer-background.svg')",
      footerBackgroundDark:
        "url('resources/backgrounds/footer-background-dark.svg')",
      footerStrips: "url('resources/backgrounds/footer-strips.svg')",
      aiInteractor: "url('resources/backgrounds/AI Interactor Background.png')",
      aiInteractorDark:
        "url('resources/backgrounds/AI Interactor Background Dark.png')",
    },
  },
  plugins: [],
};
