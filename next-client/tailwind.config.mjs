/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9', // Sky 500
                secondary: '#6366f1', // Indigo 500
                accent: '#8b5cf6', // Violet 500
                dark: '#0f172a', // Keeping for finding/replacing, but will essentially be unused after refactor
                'dark-lighter': '#1e293b',
                'glass-white': 'rgba(15, 23, 42, 0.05)', // Inverted for light mode (dark glass)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #e0f2fe 0deg, #e0e7ff 180deg, #f0f9ff 360deg)', // Light gradients
            },
        },
    },
    plugins: [],
}
