/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'navBarImg':'url(https://i.postimg.cc/653yThDp/cool-background.png)',
        'navBarBlack':'url(https://i.postimg.cc/CM4Z3ZP0/nav-Bar-Black.png)',
        'homeCard1':'url(https://i.postimg.cc/6qGkbDrm/cool-background.png)',
        'homeCard2':'url(https://i.postimg.cc/tgvRKG6q/cool-background-1.png)'
      },
      screens:{
        'mobileS':{'min':'0px','max':'320px'}
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

