import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       screens:{
        mobile: '320px',
        lg_mobile: '410px',
        medium: '550px',
        laptop : '820px',
        lg_laptop : '900px',
        xlg:'1200px'
       },
    
    },
  },
  plugins: [],
} satisfies Config;
