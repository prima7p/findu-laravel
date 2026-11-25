/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#EAA023',
                    hover: '#D97706',
                    light: '#FEF3C7',
                },
                brand: {
                    navy: '#1E3A8A',
                    bg: '#DEE8FC',
                    card: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
