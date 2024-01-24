/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // we are declaring a custom tailwaind class named 'container' with the following properties.
      container: {
        center: true,
        padding: "1.25 rem",
      },
      //setting up a primary color. Now, use this color into html elements(where color names are used in tailwind like red, green, pink etc.). Now, we have a new color named primary.
      colors: {
        primary: "#00d991",
      },
    },
  },
  plugins: [],
};
