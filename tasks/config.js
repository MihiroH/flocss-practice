const ASSET_ROOT = 'src';
const DEST_ROOT = 'dist';

module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  assetRoot: ASSET_ROOT,
  destRoot: DEST_ROOT,

  sass: {
    root: `${ASSET_ROOT}/assets/scss/**`,
    src: `${ASSET_ROOT}/assets/scss/**/*.scss`,
    dest: `${DEST_ROOT}/assets/css`
  },

  templates: {
    ejs: `${ASSET_ROOT}/templates/**/*.ejs`,
    pages: [`${ASSET_ROOT}/templates/pages/**/*.ejs`, `!${ASSET_ROOT}/templates/pages/**/_*.ejs`],
    data: {
      meta: `${ASSET_ROOT}/json/meta.json`,
    },
    dest: DEST_ROOT,
    startPath: ''
  },

  static: {
    src: `${ASSET_ROOT}/static/**/*`,
    assets: [`${ASSET_ROOT}/assets/**/*`, `!${ASSET_ROOT}/assets/scss/**`],
    dest: DEST_ROOT
  }
}
