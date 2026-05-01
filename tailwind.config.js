module.exports = {
    darkMode: 'class',
    content: [
        './layout/**/*.html',
        './content/**/*.md',
        './assets/js/**/*.js',
        './themes/careercanvas/layouts/**/*.html',
        './themes/careercanvas/assets/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
}
