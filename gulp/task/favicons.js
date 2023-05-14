const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");


let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

module.exports = function favicon() {
  return gulp.src(paths.favicon.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.favicon.dest))
}
