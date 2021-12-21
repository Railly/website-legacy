module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./_posts/**/*.mdx",
    "./_projects/**/*.mdx",
    "./lib/**/*.{js, ts, jsx, tsx}",
    "./utils/**/*.{js, ts, jsx, tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ',
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
