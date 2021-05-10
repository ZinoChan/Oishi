const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: { 
                main: ['Quicksand', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
                pacifico: ['Pacifico', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: "#FF4445",
                secondary: "#FFDB6D",
                "light_gray": "#F8F8F8" 
            },
            gridTemplateColumns: {
                'auto-1': ' repeat(1, minmax(0, auto))',
               'auto-2': ' repeat(2, minmax(0, auto))',
              }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [],
}

