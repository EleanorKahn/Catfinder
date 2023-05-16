/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx"],
    theme: {
        extend: {
            colors: {
                "mutedCyan": "hsl(168, 34%, 41%)",
                "darkDesaturatedCyan": "hsl(167, 40%, 24%)",
            },
        },
        fontFamily: {
            "fraunces": ["Fraunces", "serif"],
            "barlow": ["Barlow", "sans-serif"]
        },
    },
    plugins: [],
};