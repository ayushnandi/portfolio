/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "bgHome": "#0A0A0A",
        "sk1": "#EEE5E0",
        "sk2": "#BAACA3",
        "sk3": "#D9C7BD",
        "fadeBlack": "#4A4B4F",
      },
      fontFamily:{
        'mdprimer':['mdprimer'],
      }
      
    },
  },
  // Done with setup and added colour highlights
  plugins: [],
}

