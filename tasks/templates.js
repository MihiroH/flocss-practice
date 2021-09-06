const fs = require('fs');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const ejs = require('gulp-ejs');
const prettier = require('gulp-prettier');
const rename = require('gulp-rename');

const { templates: config } = require('./config');

exports.templates = () => {
  return gulp
    .src(config.pages)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(ejs({
      ROOT: config.startPath,
      TIMESTAMP: Date.now(),
      meta: JSON.parse(fs.readFileSync(config.data.meta, 'utf-8'))
    }))
    .pipe(rename(path => {
      if (path.basename !== 'index') {
        path.dirname += `/${path.basename}`;
        path.basename = 'index';
      }
      path.extname = '.html';
    }))
    .pipe(prettier())
    .pipe(gulp.dest(config.dest));
}
