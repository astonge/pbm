var gulp = require('gulp');

gulp.task('css', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/css/*.min.css',
    ]).pipe(gulp.dest('public/css'))
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/*.min.js',
        'node_modules/jquery/dist/*.min.js'
    ]).pipe(gulp.dest('public/js'))
});

gulp.task('default',['css','js']);