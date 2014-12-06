var bower = require('gulp-bower');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

var paths = {
  scripts: ['./lib/crafty/dist/crafty.js',
            './lib/crafty-component-progressbar/ProgressBar.js',
            './js/src/components.js',
            './js/src/scenes.js',
            './js/src/main.js']
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(changed('./js/'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);
