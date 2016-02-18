'use strict'

var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
maps = require('gulp-sourcemaps'),
clean = require('gulp-clean'),
loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('concatScripts', function () {
  gulp.src(['scripts/**/*.js'])
  .pipe(maps.init())
    .pipe(concat('app.concat.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('scripts'))
});

//TODO get working!
gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("scripts/app.concat.js")
		.pipe(uglify({mangle: false}))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('scripts'));
});

gulp.task('loopBack', function () {
	return gulp.src('../turnus-test-server/server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./scripts/services'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/controllers/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
  return gulp.src('dist')
  .pipe(clean({force: true}))
  .pipe(gulp.dest('dist'))
});

gulp.task("build", ["minifyScripts"], function() {
  // return gulp.src([,
  //   'scripts/app.min.js',
  //   'index.html'], {base: './'})
  // .pipe(gulp.dest('dist'));
});

gulp.task("default", function() {
    gulp.start('build');
});
