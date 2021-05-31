module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#314C69",
          200: "#F2F8FF",
          300: "#f0fbff",
        },
        oranye: {
          100: "#FF956A",
        },
        black: {
          100: "#5A5A5A",
        },
        gray: {
          100: "#F3F4F6",
        },
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
