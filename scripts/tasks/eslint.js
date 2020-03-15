/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const { CLIEngine } = require('eslint');

const allPaths = ['**/*.js'];


function runESLintOnFilesWithOptions(finalFilePatterns, options) {
  const cli = new CLIEngine(options);
  const formatter = cli.getFormatter();
  const report = cli.executeOnFiles(finalFilePatterns);

  if (options != null && options.fix === true) {
    CLIEngine.outputFixes(report);
  }

  // When using `ignorePattern`, eslint will show `File ignored...` warnings for any ignores.
  // We don't care because we *expect* some passed files will be ignores if `ignorePattern` is used.
  const messages = report.results.filter((item) => {
    const ignoreMessage = 'File ignored because of a matching ignore pattern. Use "--no-ignore" to override.';
    return !(item.messages[0] && item.messages[0].message === ignoreMessage);
  });

  const ignoredMessageCount = report.results.length - messages.length;
  return {
    output: formatter(messages),
    errorCount: report.errorCount,
    warningCount: report.warningCount - ignoredMessageCount,
  };
}

function runESLint({ onlyChanged }) {
  if (typeof onlyChanged !== 'boolean') {
    throw new Error('Pass options.onlyChanged as a boolean.');
  }
  const { errorCount, warningCount, output } = runESLintOnFilesWithOptions(
    allPaths,
  );
  console.log(output);
  return errorCount === 0 && warningCount === 0;
}

console.log('Linting all files...');

if (runESLint({ onlyChanged: false })) {
  console.log('Lint passed.');
} else {
  console.log('Lint failed.');
  process.exit(1);
}
