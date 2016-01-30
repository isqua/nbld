var jade = require('gulp-jade');
var metrika = require('./metrika');
var freeze = require('./freeze');

module.exports = function(gulp, src, dest, counter) {
    var jadeFiles = src + '/*.jade';

    gulp.task('jade', function () {
        return gulp.src(jadeFiles)
            .pipe(jade())
            .pipe(metrika(counter))
            .pipe(freeze(dest))
            .pipe(gulp.dest(dest));
    });
};
