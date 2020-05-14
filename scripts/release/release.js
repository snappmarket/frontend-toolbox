/* eslint-disable no-console */
const shell = require('shelljs');
const path = require('path');
const grabVersionAndGenerateNewOne = require('../version/version-generator');

const myArguments = process.argv.slice(2);
const passedVersion = myArguments[0] || '--canary';

console.log(`releasing ${passedVersion} together !`);

(async function run() {
  try {
    const { version } = await grabVersionAndGenerateNewOne(passedVersion, path.join(process.cwd(), 'packages/ui/'));

    if (shell.exec(`lerna run --parallel change-version -- -- ${version} && lerna run --parallel build && lerna run --parallel publish-npm -- -- ${version}`).code !== 0) {
      shell.echo('Release build, or publish failed');
      shell.exit(1);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());
