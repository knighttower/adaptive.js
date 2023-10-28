const targets = [
    { name: 'Adaptive', ext: 'js', exportType: 'named' },
    { name: 'Teleport', ext: 'js', exportType: 'named' },
];

const rollupFormats = ['amd', 'cjs', 'umd', 'iife', 'system', 'esm'];
const webpackFormats = [
    { name: 'umd', dir: 'umd' },
    { name: 'commonjs2', dir: 'cjs' },
    { name: 'window', dir: 'browser' },
];

module.exports = {
    targets,
    rollupFormats,
    webpackFormats,
};
