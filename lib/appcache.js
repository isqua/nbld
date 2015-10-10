var map = require('vinyl-map');
var path = require('path');

module.exports = function(gulp, src, dest) {
    var htmlSrc = src + '/manifest.appcache';

    gulp.task('appcache', [ 'css:production', 'js:production' ], function() {
        return gulp.src(htmlSrc)
            // Add freezed static files
            .pipe(map(function(html, filename) {
                var files = require('./freeze')(dest);

                return html.toString()
                    .replace('style.css', files.css)
                    .replace('script.js', files.js);
            }))
            .pipe(gulp.dest(dest));
    })
};
