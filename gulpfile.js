'use strict'

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('concatScripts', function () {
  return gulp.src([
  'src/js/app.js',
  'src/js/**/*.js'
  // 'src/js/routes/*.js',
  // 'src/js/controllers/*.js',
  // 'src/js/directives/*.js',
  // 'src/js/services/*.js'
  ])
  .pipe(maps.init())
    .pipe(concat('app.concat.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dist'))
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("dist/app.concat.js")
		.pipe(uglify({mangle: false}))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('loopBack', function () {
	return gulp.src('../turnus-test-server/server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./src/js/services'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/controllers/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
  del([
    'dist']);
});

gulp.task("build", ["minifyScripts"], function()
{
  // return gulp.src([
  //   'src/styles/normalize.css',
  //   'src/styles/main.css'], {base: './'})
  // .pipe(gulp.dest('dist'));
});

//TODO look at deletion problem
gulp.task("default", ["clean"], function() {
    gulp.start('build');
});
