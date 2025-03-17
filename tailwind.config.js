/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',

        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#2D2D2D',
          200: '#1F1F1F',
          300: '#0C0C0C',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  plugins: [
    require('@tailwindcss/forms'), // Add Tailwind CSS forms plugin
    require('@tailwindcss/typography'), // Add Tailwind CSS typography plugin
  ],
}};