var gulp = require('gulp');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('default', function () {
	return gulp.src('../turnus-test-server/server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./scripts/services'));
});
