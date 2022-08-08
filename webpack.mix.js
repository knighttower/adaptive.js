const mix = require('laravel-mix');

mix.js('example/app.js', 'test').vue();
mix.js('src/Adaptive.js', 'dist');
// mix.js('src/Adaptive.js', 'dist/Adaptive.min.js');
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
})
    .webpackConfig({
        externals: {
            vue: 'Vue',
        },
        resolve: {
            modules: ['node_modules'],
        },
        stats: 'errors-only',
    })
    .disableNotifications();
