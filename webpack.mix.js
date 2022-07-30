const mix = require('laravel-mix');

mix.js('example/app.js', 'test').vue();

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
