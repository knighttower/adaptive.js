const mix = require('laravel-mix');

mix.js('src/app.js', 'test').vue();

mix.autoload({
		jquery: ['$', 'window.jQuery', 'jQuery'],
	})
	.webpackConfig({
		externals: {
			jquery: 'jQuery',
			vue: 'Vue',
			lodash: {
				root: '_',
			},
		},
		resolve: {
            modules: [
                'node_modules',
            ]
        },
        stats: 'errors-only'
	})
	.disableNotifications();
