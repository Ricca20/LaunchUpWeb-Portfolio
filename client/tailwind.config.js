/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1', // Indigo 500
                secondary: '#ec4899', // Pink 500
                accent: '#8b5cf6', // Violet 500
                dark: '#0f172a', // Slate 900
                'dark-lighter': '#1e293b', // Slate 800
                'glass-white': 'rgba(255, 255, 255, 0.1)',
                'glass-dark': 'rgba(15, 23, 42, 0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            },
        },
    },
    plugins: [],
}
