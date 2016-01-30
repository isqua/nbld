var htmlmin = require('gulp-htmlmin');
var metrika = require('./metrika');
var freeze = require('./freeze');

module.exports = function(gulp, src, dest, counter) {
    var htmlSrc = src + '/*.html';

    gulp.task('html:production', [ 'css:production', 'js:production' ], function() {
        return gulp.src(htmlSrc)
            // Add Yandex.Metrika
            .pipe(metrika(counter))
            // Add freezed static files
            .pipe(freeze(dest))
            .pipe(htmlmin())
            .pipe(gulp.dest(dest));
    })
};
