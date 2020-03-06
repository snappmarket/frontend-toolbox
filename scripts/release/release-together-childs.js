/* eslint-disable no-console */
const shell = require('shelljs');
const path = require('path');
const grabVersionAndGenerateNewOne = require('../version/version-generator');

const myArguments = process.argv.slice(2);
const passedVersion = myArguments[0] || '--canary';

console.log(`releasing ${passedVersion} together !`);

let version = '';
(async function run() {
  try {
    const gatheredVersionInfo = await grabVersionAndGenerateNewOne(passedVersion, path.join(process.cwd(), 'packages/ui/'));
    version = gatheredVersionInfo.version;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());

if (shell.exec(`lerna run --parallel release:child -- -- ${version}`).code !== 0) {
  shell.echo('Release build, or publish failed');
  shell.exit(1);
}
