/**
 * standard gulp build file for browser client projects
 */

'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

var errorHandler = function(err) {
    gutil.beep();
    console.log( err );
};

var paths = {
    src: 'lib/*.js',
    tests: 'test/*.js',
    examples: 'examples/*.js'
};

gulp.task('jshint', function() {
    gulp.src([ paths.src, paths.tests, paths.examples ], { read:false } )
        .pipe( plumber({ errorHandler:errorHandler }) )
        .pipe( jshint() )
        .pipe( jshint.reporter('jshint-stylish') );
});

gulp.task('mocha', function() {
    gulp.src( paths.tests, { read:false } )
        .pipe( plumber({ errorHandler:errorHandler }) )
        .pipe( mocha({ reporter:'spec' }) );
});

gulp.task('test', [ 'mocha', 'jshint' ] );

gulp.task('watch', [ 'test' ], function () {
    gulp.watch([ paths.src, paths.tests ], [ 'test' ]);
});

gulp.task('default', [ 'test', 'watch' ]);

