const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    processCssUrls: true,
});


mix.copy('resources/images', 'public/images')
    .copy('resources/fonts', 'public/fonts');

mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/custom.scss', 'public/css/style.css', {}, [
        require("rtlcss")({}),
    ]).options({
    processCssUrls: true});
