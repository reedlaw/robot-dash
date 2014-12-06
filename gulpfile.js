var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'));
});

gulp.task('js', function() {
  return gulp.src(['./lib/crafty/dist/crafty.js ', './js/src/*.js'])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js/'));
});

