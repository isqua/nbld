var uglify = require('gulp-uglify');
var freeze = require('gulp-freeze');

module.exports = function(gulp, src, dest) {
    src += '/*.js';

    gulp.task('js:production', function() {
        return gulp.src(src)
            .pipe(uglify())
            .pipe(freeze({ append: false }))
            .pipe(gulp.dest(dest));
    });
};
