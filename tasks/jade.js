const jade = require('gulp-jade');
const metrika = require('../lib/metrika');

module.exports = (gulp, config) => {

    gulp.task('jade:development', () => {
        return gulp.src(config.src)
            .pipe(jade())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('jade:production', () => {
        var pipe = gulp.src(config.src).pipe(jade());

        if (config.metrika) {
            pipe = pipe.pipe(metrika(config.metrika));
        }

        return pipe.pipe(gulp.dest(config.dest));
    });

};
