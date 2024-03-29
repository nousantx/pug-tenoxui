const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

function compilePug() {
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream()); // Inject changes to all browsers
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './dist' // Serve files from the 'dist' directory
    }
  });

  gulp.watch('src/*.pug', compilePug);
}

exports.default = gulp.series(compilePug, watch);
