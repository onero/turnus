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
  'scripts/app.js',
  'scripts/**/*.js'
  // 'scripts/routes/*.js',
  // 'scripts/controllers/*.js',
  // 'scripts/directives/*.js',
  // 'scripts/services/*.js'
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
    .pipe(gulp.dest('./scripts/services'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/controllers/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
  del([
    'dist']);
});

gulp.task("build", ["minifyScripts"], function()
{
  // return gulp.src([
  //   'scripts/app.min.js'], {base: './'})
  // .pipe(gulp.dest('dist'));
});

//TODO look at deletion problem
gulp.task("default", ["clean"], function() {
    gulp.start('build');
});
