/**
 Walk directory,
 list tree without regex excludes
 */
const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');


const walk = (dir, regExcludes, done) => {
  let results = [];

  // eslint-disable-next-line consistent-return
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(file => {
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

              if (!--pending) {
                done(null, results);
              }
            });
          } else if (!--pending) {
            done(null, results);
          }
        });
      } else if (!--pending) {
        done(null, results);
      }
    });
  });
};

const regExcludes = [/index\.js/, /js\/lib\.js/, /node_modules/, /\.DS_Store/];


/* eslint-disable indent */
const asyncForEach = async (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
};

walk('./packages', regExcludes, async (err, results) => {
  if (err) {
    throw err;
  }

  let content = '';
  await asyncForEach(results, item => {
    if (
      item.indexOf('/component') > -1
    ) {
      const lastSlash = item.lastIndexOf('/');
      const dirName = item.substr(lastSlash + 1).replace('.svg', '');
      const pathDir = `${item.substr(0, lastSlash)}/${camelCase(dirName)}`;

      content += `
${item}`;
    }
  });

  await fse.writeFile(
    `ddddd.js`,
    content,
    'utf8',
  );

});
