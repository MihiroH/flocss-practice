const gulp = require('gulp');

const {
  sass: sassConfig,
  templates: templatesConfig,
  static: staticConfig,
} = require('./tasks/config');

const { reload, serve } = require('./tasks/server');
const { sass } = require('./tasks/styles');
const { templates } = require('./tasks/templates');
const { copy } = require('./tasks/copy');
const { clean } = require('./tasks/clean');

/**
 * ファイルの変更を監視
 */
const watchFiles = () => {
  // sass
  gulp.watch(sassConfig.src, gulp.series(sass, reload));

  // Templates
  gulp.watch(
    [templatesConfig.ejs, templatesConfig.data.meta],
    gulp.series(templates, reload)
  );

  // Static
  gulp.watch(
    [staticConfig.src, ...staticConfig.assets],
    gulp.series(copy, reload)
  );
};

/**
 * 開発用ビルド
 */
gulp.task('default', gulp.series(
  clean,
  gulp.parallel(sass, templates, copy),
  serve,
  watchFiles
));

/**
 * 本番用ビルド
 */
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(sass, templates, copy)
));
