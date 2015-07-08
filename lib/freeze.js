var foundFiles;
var path = require('path');
var fs = require('fs');

module.exports = function(dest) {
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
