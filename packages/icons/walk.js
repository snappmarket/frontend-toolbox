/**
 Walk directory,
 list tree without regex excludes
 */
const fs = require('fs');
const path = require('path');
const fsExtra = require("fs-extra");

const move = (oldPath, newPath, callback) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      if (err.code === 'EXDEV') {
        copy();
      } else {
        callback(err);
      }
      return;
    }
    callback();
  });

  function copy() {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', () => {
      fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
  }
};

const walk = (dir, regExcludes, done) => {
  let results = [];

  // eslint-disable-next-line consistent-return
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach((file) => {
      file = path.join(dir, file);

      let excluded = false;
      const len = regExcludes.length;
      let i = 0;

      for (; i < len; i++) {
        if (file.match(regExcludes[i])) {
          excluded = true;
        }
      }

      // Add if not in regExcludes
      if (excluded === false) {
        results.push(file);

        // Check if its a folder
        // eslint-disable-next-line no-shadow
        fs.stat(file, (err, stat) => {
          if (stat && stat.isDirectory()) {
            // If it is, walk again
            walk(file, regExcludes, (err, res) => {
              results = results.concat(res);

              if (!--pending) { done(null, results); }
            });
          } else if (!--pending) { done(null, results); }
        });
      } else if (!--pending) { done(null, results); }
    });
  });
};

const regExcludes = [/index\.js/, /js\/lib\.js/, /node_modules/];

walk('./packages', regExcludes, (err, results) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line array-callback-return
  results.map(async (item) => {
    const newDirName = item.replace('.js', '');
    const newFileName = `${item.replace('.js', '')}/index.js`;

    fsExtra.ensureDirSync(newDirName);

    move(item, newFileName, (error) => {
      if (!error) {
        console.log('moved');
      } else {
        console.log(error);
      }
    });
  });
});
