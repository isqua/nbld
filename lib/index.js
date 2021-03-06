module.exports = function(gulp, opts) {
    require('./js')(gulp, opts.src, opts.dest);
    require('./css')(gulp, opts.src, opts.dest);
    require('./jade')(gulp, opts.src, opts.dest, opts.metrika);
    require('./html')(gulp, opts.src, opts.dest, opts.metrika);
    require('./appcache')(gulp, opts.src, opts.dest);
};
