const pug = require('gulp-pug');
const data = require('gulp-data');
const metrika = require('../lib/metrika');

module.exports = (gulp, config) => {

    gulp.task('pug:development', () => {
        return gulp.src(config.src)
            .pipe(data(config.data || {}))
            .pipe(pug())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('pug:production', () => {
        var pipe = gulp.src(config.src)
            .pipe(data(config.data || {}))
            .pipe(pug());

        if (config.metrika) {
            pipe = pipe.pipe(metrika(config.metrika));
        }

        return pipe.pipe(gulp.dest(config.dest));
    });

};
