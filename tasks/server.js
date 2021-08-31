const browserSync = require('browser-sync');

const { destRoot } = require('./config');

const server = browserSync.create();

exports.reload = callback => {
  server.reload();
  callback();
}

exports.serve = callback => {
  server.init({
    server: {
      baseDir: destRoot
    }
  });

  callback();
}
