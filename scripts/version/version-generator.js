const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const shell = require('shelljs');

/**
 * Working dir package
 * @type {string}
 */
const packagePath = process.cwd();

/**
 * Random string
 * @param length
 * @returns {string}
 */
const makeId = (length) => Math.random()
  .toString(36)
  .substring(length);

/**
 * Grab version and generate new one
 * @param passedVersion
 * @param dir
 * @param generateNewOne
 * @returns {Promise<{version: *, packageParsedData: *}>}
 */
const grabVersionAndGenerateNewOne = async (passedVersion, dir = false, generateNewOne = true) => {
  const packageData = await fse.readFile(
    path.resolve(dir || packagePath, './package.json'),
    'utf8',
  );

  const packageParsedData = JSON.parse(packageData);

  let { version } = packageParsedData;

  // we could just read package info with no generation
  if (generateNewOne) {
    const semVer = version.split('-')[0].split('.');

    switch (passedVersion) {
      case '--canary':
        version = `${semVer.join('.')}-alpha.${makeId(6)}`;
        break;
      case '--beta':
        version = `${semVer.join('.')}-beta.${makeId(6)}`;
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
        // explicit version
        if (semver.valid(passedVersion)) {
          version = passedVersion;
        } else {
          shell.echo('Please provide a valid custom version');
          shell.exit(1);
        }
    }
  }

  return {
    version,
    packageParsedData,
  };
};

module.exports = grabVersionAndGenerateNewOne;
