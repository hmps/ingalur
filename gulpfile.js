(function() {
    'use strict';

    var gulp    = require('gulp'),
        jshint  = require('gulp-jshint'),
        karma   = require('karma').server;


    gulp.task('default', ['scripts'], function(done) {
        karma.start({
            configFile: __dirname + '/test/karma.unit.conf.js',
            singleRun: false
        }, done);
    });

    gulp.task('scripts', function() {
        return gulp.src('./src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
}());