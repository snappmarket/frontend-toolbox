/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './packages');

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8');
  const {
    nyc, scripts, devDependencies, workspaces, ...packageDataOther
  } = JSON.parse(
    packageData,
  );
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: './esm/index.js',
  };
  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

/**
 * Puts a package.json into every immediate child directory of rootDir.
 *
 * It also tests that an this import can be used in typescript by checking
 * if an index.d.ts is present at that path.
 *
 * @param {string} rootDir
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.js', { cwd: from }).map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
        module: path.join('../esm', directoryPackage, 'index.js'),
      };
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');

      await Promise.all([
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      return packageJsonPath;
    }),
  );
}

async function run() {
  try {
    await createPackageFile();
    await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
