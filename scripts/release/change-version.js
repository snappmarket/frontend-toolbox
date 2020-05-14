/* eslint-disable no-console */
const changeVersionInPackageJson = require('../version/change-version');

const myArguments = process.argv.slice(2);
const passedVersion = myArguments[0] || '--canary';

console.log(`- releasing ${passedVersion} !`);

(async function run() {
  try {
    await changeVersionInPackageJson(passedVersion);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
