/* eslint-disable no-console */
const shell = require('shelljs');
const changeVersionInPackageJson = require('../version/change-version');

const myArguments = process.argv.slice(2);
const passedVersion = myArguments[0] || '--canary';

console.log(`releasing ${passedVersion} !`);

(async function run() {
  try {
    await changeVersionInPackageJson(passedVersion);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());

// Run external tool synchronously
if (shell.exec(`yarn build && npm publish ${!['--canary', '--alpha'].includes(passedVersion) ? '--tag latest' : ''}`).code !== 0) {
  shell.echo('Child Release build, or publish failed');
  shell.exit(1);
}
