/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    

    
    extend: {
     backgroundImage: {
      'desktop-light': "url('assets/bg-desktop-light.jpg')",
      'desktop-dark': "url('assets/bg-desktop-dark.jpg')",
      'mobile-light': "url('assets/bg-mobile-light.jpg')",
      'mobile-dark': "url('assets/bg-mobile-dark.jpg')",

      'check-background': 'linear-gradient(192deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
     },
     backgroundColor: {
      
     },

     colors: {
      
      'check': 'linear-gradient(192deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      'gradient1': 'hsl(192, 100%, 67%)',
      'gradient2': 'hsl(280, 87%, 65%)',
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
        "accent": "hsl(236, 9%, 61%)",
        "secondary": "hsl(233, 11%, 84%)",
        "primary": "hsl(235, 19%, 35%)",
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