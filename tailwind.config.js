/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      colors: {
        'bar' : '#EFF1F2',
        'border' : '#e1e1e1',
        'primary' : '#FCB800',
        'secondary' : '#0066cc',
        'textColor' : '#666',
        'bgColor' : "#F5F5F5"
      },
    },
    fontFamily: {
      'work': ['Work Sans', 'sans-serif']
    },
  },
  plugins: [],
}
