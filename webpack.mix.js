const mix = require('laravel-mix');

mix.js('example/app.js', 'example/app.min.js').vue();
mix.js('src/Adaptive.js', 'dist');
mix.minify('src/Adaptive.js', 'dist/Adaptive.min.js');
mix.webpackConfig({
    externals: {
        vue: 'Vue',
    },
    resolve: {
        modules: ['node_modules'],
    },
    stats: 'errors-only',
}).disableNotifications();
