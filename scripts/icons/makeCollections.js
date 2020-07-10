/**
 Walk directory,
 list tree without regex excludes
 */
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

/* eslint-disable consistent-return, no-plusplus, no-shadow, no-await-in-loop, guard-for-in,no-restricted-syntax */


const walk = (dir, regExcludes, done) => {
  let results = [];

  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(file => {
      // eslint-disable-next-line no-param-reassign
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

  const content = {};
  await asyncForEach(results, item => {
    if (item.indexOf('/component') > -1) {
      const lastSlash = item.replace('/component').lastIndexOf('/');
      const iconName = item.substr(lastSlash + 1).replace('/component', '');
      const pathDir = `${item.substr(0, lastSlash)}`;

      let current =
        content[pathDir] ||
        `/**
* THIS IS AN AUTO GENERATED FILE, CHANGES COULD BE OVERWRITE
*/`;
      current += `
export { default as ${iconName} } from './${iconName}/component';`;
      content[pathDir] = current;
    }
  });

  for (const key in content) {
    await fse.writeFile(`${key}/index.js`, content[key], 'utf8');
    await fse.writeFile(
      `${key}/sprite.js`,
      content[key].replace(/\/component/g, '/sprite'),
      'utf8',
    );
  }
});
