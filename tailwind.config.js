/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        18:"18px",
        28:'114px',
      },
      margin:{
        30:'30px'
      },
      fontSize:{
        17:["17px" , "25.5px"],
        77:["77px" , "100px"],
        40:["40px" , "60px"],
        50:["50px" , "63px"],
        15:["15px" , "22.5px"],
      },
      borderRadius:{
        10:'10px'
      },
      maxWidth:{
        34:"134px",
        42:"287px",
        55:"220px",
      }
    },
  },
  plugins: [],
}


