/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      "instrument": ['"Instrument Sans"', "serif"],
      "dongle": ['"Dongle"', "serif"],
    },
    colors: {
      white: "#ffffff",
      primary: {
        200: "#97B0C8",
        300: "#2D5F91",
        400: "#1B4378",
        DEFAULT: "#092D65",
        600: "#022159",
      },
      secondary: {
        200: "#FFEFED",
        300: "#FCA396",
        400: "#EE7C6E",
        DEFAULT: "#D75E50",
        600: "#BD4336",
      },
      gray: {
        300: "#FAFAFA",
        400: "#F2F2F2",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
    },

    fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "700",
        },
      ],
      "7xl": [
        "96px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "73px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "64px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "48px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "45px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.8px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "40px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "28pt",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "37px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.8px",
          fontWeight: "400",
        },
      ],
      base: [
        "29px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.7px",
          fontWeight: "400",
        },
      ],
      sm: [
        "24px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      xs: [
        "16px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "29px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "27px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "24px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "21px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],
      extend: {},
    },

    borderRadius: {
      DEFAULT: '10px',
      full: '999999px',
    },
    plugins: [],
  },
};
