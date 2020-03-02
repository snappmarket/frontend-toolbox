/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const myArguments = process.argv.slice(2);

const makeid = (length) => {
  return Math.random().toString(36).substring(length);
};

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8',
  );
  const packageParsedData = JSON.parse(packageData);

  let newPackageData = {};


  // change version
  if (myArguments[0]) {
    let { version } = packageParsedData;
    const semVer = version.split('-')[0].split('.');

    switch (myArguments[0]) {
      case '--canary':
        version = `${semVer.join('.')}-alpha.${makeid(6)}`;
        break;
      case '--beta':
        version = `${semVer.join('.')}-beta.${makeid(6)}`;
        break;
      case '--patch':
        version = `${semVer[0]}.${semVer[1]}.${parseInt(semVer[2], 10) + 1}`;
        break;
      case '--minor':
        version = `${semVer[0]}.${parseInt(semVer[1], 10) + 1}.0`;
        break;
      case '--major':
        version = `${parseInt(semVer[0], 10) + 1}.0.0`;
        break;
      default:
        // same version
    }

    console.log(version)
    newPackageData = {
      ...packageParsedData,
      version,
    };
  } else {
    newPackageData = {
      ...packageParsedData,
    };
  }

  const targetPath = path.resolve(packagePath, './package.json');

  console.log("targetPath" , targetPath);
  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8',
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

(async function run() {
  try {
    await createPackageFile();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
