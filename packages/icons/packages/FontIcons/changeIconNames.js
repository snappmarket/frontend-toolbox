/**
 Walk directory,
 list tree without regex excludes
 */
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

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

// const regExcludes = [/index\.js/, /js\/lib\.js/, /node_modules/];

walk('./', [], (err, results) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line array-callback-return
  results.map(async item => {
    const folderName = item.split('/')[0];

    try {
      const data = await fse.readFile(
        path.resolve(process.cwd(), `./${item}`),
        'utf8',
      );

      const newContent = data.replace(
        /data-testid="changeIconNames.js"  className={className}/g,
        `data-testid="${folderName} data-testid="changeIconNames.js"  className={className}"`,
      );
      fs.writeFile(item, newContent, err => {
        if (err) {
          return console.log(err);
        }
        console.log('The file was saved!');
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
});
