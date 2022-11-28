/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { fontFamily: { roboto: "Roboto", poppins: "Poppins" } },
    colors: {
      gray: {
        "100": "#f4f6fc",
        "200": "#d1edff",
        "300": "#ccd0e8",
        "400": "#a2d6f9",
        "500": "#9b9b9a",
        "600": "#6b708d",
        "700": "#292e47",
      },
      gold: "#ffc600",
      indigo: "#072ac8",
      white: "#fff",
    },
    fontSize: { sm: "17px", base: "20px", lg: "24px", xl: "40px" },
    screens: { sm: { max: "428px" } },
  },
  corePlugins: { preflight: false },
};
