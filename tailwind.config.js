/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#A3AED0', // Light muted blue with gray undertone
          2: '#97A1C0', // Dusty pale blue
          3: '#6F4AFF', // Bright, intense violet-blue
          4: '#5A4BFF', // Deep, saturated blue-violet
        },
        gray: {
          1: '#E6E6EB', // Very light gray with lavender hint
          2: '#C2C2C2', // Neutral soft light gray
        },
        yellow: {
          1: '#FFC940', // Pastel, soft golden yellow
          2: '#E0A806', // Strong, deep golden yellow
        },
        orange: {
          1: '#F28C34', // Bright vivid orange
        },
        green: {
          1: '#3CCF91', // Vibrant, fresh mint green
        },
        red: {
          1: '#E05252', // Lively, medium bright red
        },
        magenta: {
          1: '#D97ACC', // Playful, vivid medium magenta
        },
      },
    },
  },
};
