/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#4A90D9",
                accent: "#E8B4B8",
                "brand-bg": "#FAF8F5",
                "background-light": "#FFFFFF",
                "background-dark": "#0A1128",
                "text-light": "#333333",
                "text-dark": "#F3F4F6",
            },
            fontFamily: {
                sans: ['"Inter"', "sans-serif"],
                display: ['"Playfair Display"', "serif"],
            },
        },
    },
    plugins: [],
};
