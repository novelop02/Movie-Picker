/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
  themes: [
    {
      auththeme: {
        "primary": "#2563eb",
        "secondary": "#7c3aed",
        "accent": "#22d3ee",
        "neutral": "#1f2937",
        "base-100": "#ffffff",
        "info": "#3b82f6",
        "success": "#10b981",
        "warning": "#f59e0b",
        "error": "#ef4444",
      },
    },
    "light",
    "dark",
  ],
},
}

