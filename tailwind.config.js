/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'Caveat': "Caveat",
            'maca': "maca",
            "mikh": "mikh",
            "anton": "anton"
        },
        extend: {},
        container: {
            center: true,
            padding: '1rem',
            screens: {
                xs: 'w-[85%]',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1558px',
            },
        },
        plugins: [],
    }
}

