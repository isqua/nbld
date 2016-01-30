var foundFiles;
var path = require('path');
var fs = require('fs');
var map = require('vinyl-map');

function getFreezedFiles(dest) {
    var files;

    if (foundFiles) {
        return foundFiles;
    }

    foundFiles = {};

    files = fs.readdirSync(path.resolve(process.cwd(), dest));

    files.forEach(function(filename) {
        if (/.js$/.test(filename)) {
            foundFiles.js = path.basename(filename);
        }

        if (/.css$/.test(filename)) {
            foundFiles.css = path.basename(filename);
        }
    });

    return foundFiles;
};

module.exports = function(dest) {
    return map(function(html) {
        var files = getFreezedFiles(dest);

        return html.toString()
            .replace('style.css', files.css)
            .replace('script.js', files.js);
    });
};
