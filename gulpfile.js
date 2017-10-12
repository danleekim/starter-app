// Include gulp
var gulp = require('gulp');

//watch task 
gulp.task('watch', function() {
    // Watch .js files
   gulp.watch('src/js/*.js', ['scripts']);
    // Watch .scss files
   gulp.watch('src/scss/*.scss', ['sass']);
    // Watch image files
   gulp.watch('src/images/**/*', ['images']);
  });

  // Default Task
gulp.task('default', ['scripts', 'sass', 'images', 'watch']);

module.exports = gulp;
