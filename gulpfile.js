var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync');

gulp.task('scss', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(browser.reload({
            stream: true
        }))
});
gulp.task('browser-sync', function () {
    browser({
        server: {
            baseDir: './'
        },
        notify: false
    });
});
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./scss/*.scss', ['scss']);
});
