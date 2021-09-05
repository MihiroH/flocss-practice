const del = require('del');

const { destRoot } = require('./config');

/**
 * 出力先のディレクトリを空にする
 */
exports.clean = () => {
  return del([destRoot]);
}
