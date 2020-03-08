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
    /**
     * This will just read ui package parent version with no generating new one
     * @note you may ask why, cuz we will have same version on all packages and sub packages this will helps us with that
     * @type {{version: *, packageParsedData: *}}
     */
    const gatheredVersionInfo = await grabVersionAndGenerateNewOne(
      passedVersion,
      path.join(process.cwd(), 'packages/ui/'),
      true,
    );
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
