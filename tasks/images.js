module.exports = (gulp, config) => {

    gulp.task('images', () => {
        return gulp.src(config.src)
            .pipe(gulp.dest(config.dest));
    });

};
