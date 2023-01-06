const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
                'serif': ['Arvo', ...defaultTheme.fontFamily.sans],
            },
        }

    },
}