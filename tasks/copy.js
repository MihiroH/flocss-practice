const gulp = require('gulp');
const rename = require('gulp-rename');

const { assetRoot, static: config } = require('./config');

exports.copy = callback => {
  gulp
    .src(config.src)
    .pipe(rename(path => {
      let dirname = '';
      dirname = path.dirname.replace(/^static/g, '');
      dirname = dirname.replace(/^\//g, '');
      path.dirname = dirname;
    }))
    .pipe(gulp.dest(config.dest));

  gulp
    .src(config.assets, { base: assetRoot })
    .pipe(gulp.dest(config.dest));

  callback();
};
