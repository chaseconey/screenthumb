// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var imageResize = require('gulp-image-resize');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    gulp.src('dist').pipe(clean());

    gulp.src('imgs/**/*.{jpg,png}')
        .pipe(imageResize({
            width : 120,
            height: 120,
            gravity: 'North',
            crop: true
        }))
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['images']);