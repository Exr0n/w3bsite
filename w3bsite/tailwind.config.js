module.exports = {
    important: true,
    //Purging for Production is configured in PostCSS Config
    purge:{
        content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
    },
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'dark': '#121019',
            'primary': '#a5d2ff',
            'accent': '#326ccc',
        },
        variants: {},
        plugins: [],

    },
};
