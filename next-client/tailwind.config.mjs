/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#007AFF', // Vivid Blue (iOS style)
                secondary: '#00C6FF', // Cyan / Light Blue
                accent: '#5856D6', // Purple/Violet
                surface: '#ffffff',
                'glass-border': 'rgba(255, 255, 255, 0.4)',
                'glass-bg': 'rgba(255, 255, 255, 0.65)',
                // Legacy support (mapped to new theme or kept for safety)
                dark: '#1D1D1F',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(0, 122, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 198, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(88, 86, 214, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 122, 255, 0.1) 0px, transparent 50%)',
                'mesh-gradient-dark': 'radial-gradient(at 0% 0%, rgba(0, 122, 255, 0.4) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 198, 255, 0.4) 0px, transparent 50%)',
                'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 122, 255, 0.15)',
                'glass-sm': '0 4px 16px 0 rgba(0, 122, 255, 0.1)',
                'glass-lg': '0 20px 60px 0 rgba(0, 122, 255, 0.2)',
                'glow': '0 0 20px rgba(0, 122, 255, 0.6)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
