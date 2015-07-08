var extend = require('extend');

module.exports = function(gulp, opts) {
    require('./js')(gulp, opts.src, opts.dest);
    require('./css')(gulp, opts.src, opts.dest);
    require('./html')(gulp, opts.src, opts.dest);
};