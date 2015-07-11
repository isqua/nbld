var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var cssnano = require('cssnano');
var freeze = require('gulp-freeze');

module.exports = function(gulp, src, dest) {
    var browsers = [ 'last 2 version' ];

    src += '/*.css';

    gulp.task('css:production', function () {
        var processors = [
            autoprefixer({ browsers: browsers }),
            cssnano({ idents: false })
        ];

        return gulp.src(src)
            .pipe(postcss(processors))
            .pipe(freeze({ append: false }))
            .pipe(gulp.dest(dest));
    });
};
