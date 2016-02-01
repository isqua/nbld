const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer-core');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const use = require('postcss-use');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (gulp, config) => {

    gulp.task('styles:development', () => {
        return gulp.src(config.src)
            .pipe(sourcemaps.init())
            .pipe(postcss([
                cssnext(),
                autoprefixer(),
                use({ modules: [ 'cssnext', 'autoprefixer' ]})
            ]))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('styles:production', () => {
        return gulp.src(config.src)
            .pipe(postcss([
                cssnext(),
                autoprefixer(),
                use({ modules: [ 'cssnext', 'autoprefixer', 'cssnano' ]}),
                cssnano()
            ]))
            .pipe(gulp.dest(config.dest));
    });

};