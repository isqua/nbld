var map = require('vinyl-map');
var path = require('path');
var fs = require('fs');
var minify = require('gulp-minify-html');

module.exports = function(gulp, src, dest) {
    var htmlSrc = src + '/*.html';

    gulp.task('html:production', [ 'css:production', 'js:production' ], function() {
        return gulp.src(htmlSrc)
            // Add Yandex.Metrika
            .pipe(map(function(html) {
                return html.toString().replace('</body>', require('./metrika')() + '</body>');
            }))
            // Add freezed static files
            .pipe(map(function(html, filename) {
                var files = require('./freeze')(dest);

                return html.toString()
                    .replace('style.css', files.css)
                    .replace('script.js', files.js);
            }))
            .pipe(minify())
            .pipe(gulp.dest(dest));
    })
};
