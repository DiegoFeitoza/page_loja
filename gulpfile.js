var gulp = require('gulp');
var minify = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('./public/modelo.html')
    .pipe(htmlmin({collapseWhitespace: true}));
});