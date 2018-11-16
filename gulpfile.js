var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function(){
  return gulp.src('src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/less/*.less', ['css']);
});

gulp.task('default', ['css', 'watch']);
