/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2A6B6B",
                "primary-dark": "#1E4F4F",
                "section-gray": "#F5F6F8",
                "text-main": "#333333",
                "text-muted": "#595959",
            },
            fontFamily: {
                sans: ["var(--font-heebo)", "Heebo", "sans-serif"],
            },
        },
    },
    plugins: [],
};
