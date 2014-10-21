// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '..',

        frameworks: ['jasmine'],

        files: [
            'node_modules/lodash/lodash.js',
            'src/**/*.js',
            'test/**/*.spec.js'
        ],

        reporters: ['progress', 'growl'],

        browsers: ['PhantomJS']
    });
};