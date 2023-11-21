/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    

    
    extend: {
     backgroundImage: {
      'desktop-light': "url('/public/assets/bg-desktop-light.jpg')",
      'desktop-dark': "url('/public/assets/bg-desktop-dark.jpg')",
     },

     height: {  
      '4/10': '40%',
     },
    },
    fontFamily: {
      Josefin: ['Josefin Sans', 'sans-serif'],
      
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [{
      myLight: {
        "primary": "hsl(236, 9%, 61%)",
        "secondary": "hsl(233, 11%, 84%)",
        "accent": "hsl(235, 19%, 35%)",
        "neutral": "hsl(235, 19%, 35%)",
        "base-100": "hsl(0, 0%, 96%)",
        "base-200": "hsl(0, 0%, 98%)",
      },

      myDark: {
        "primary": "hsl(234, 39%, 85%)",
        "secondary": "hsl(234, 11%, 52%)",
        "accent": "hsl(237, 14%, 26%)",
        "neutral": "hsl(235, 19%, 35%)",
        "base-200": "hsl(235, 24%, 19%)",
        "base-100": "hsl(240, 20%, 12%)",
      },

      
    },
    
  
  ],
  },
}