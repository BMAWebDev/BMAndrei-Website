/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(ready|processed|processing|new|pass|fail|uploaded|delivered|transcoding|cancel|cancelled|disabled|repairing|repaired|under-review|red-1|blue-3)(\/30)?/,
    },
  ],
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

        // Status colors (pentru border/text)
        ready: '#5A4BFF', // BROADCAST READY
        processed: '#3CCF91', // PROCESSED
        processing: '#F28C34', // PROCESSING
        new: '#5A4BFF', // NEW
        pass: '#FFC940', // QC PASS
        fail: '#D97ACC', // QC FAIL
        uploaded: '#3CCF91', // UPLOADED
        delivered: '#3CCF91', // DELIVERED
        transcoding: '#F28C34', // TRANSCODING
        cancel: '#E05252', // CANCEL
        cancelled: '#E05252', // CANCELLED
        disabled: '#E05252', // DISABLED
        repairing: '#F28C34', // REPAIRING...
        repaired: '#3CCF91', // REPAIRED
        'under-review': '#F28C34', // UNDER REVIEW
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
        bell: 'ring 0.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-shimmer':
          'linear-gradient(to right, #e0e0e0 0%, #f7f7f7 50%, #e0e0e0 100%)',
        general:
          'linear-gradient(90deg, #252743 0%, #101020 50%, #252743 100%)',
      },
      aspectRatio: {
        portrait: '9/16',
      },
    },
  },
};
