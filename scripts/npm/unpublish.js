const shell = require('shelljs');

// const version = '0.2.1-alpha.canary';
const packages = [
  // '@snappmarket/helpers',
  // '@snappmarket/hooks',
  // '@snappmarket/icons',
  // '@snappmarket/ui',
  //
  // '@snappmarket/array-helpers',
  // '@snappmarket/cookie-helpers',
  // '@snappmarket/debug-helpers',
  // '@snappmarket/http-helpers',
  // '@snappmarket/json-helpers',
  // '@snappmarket/map-helpers',
  // '@snappmarket/number-helpers',
  // '@snappmarket/os-helpers',
  // '@snappmarket/object-helpers',
  // '@snappmarket/promise-helpers',
  // '@snappmarket/proxy-helpers',
  // '@snappmarket/redux-helpers',
  // '@snappmarket/storage-helpers',
  // '@snappmarket/string-helpers',
  // '@snappmarket/template-helpers',
  // '@snappmarket/window-helpers',
  //
  // '@snappmarket/use-debounce',
  // '@snappmarket/use-did-update-effect',
  // '@snappmarket/use-focus',
  // '@snappmarket/use-force-update',
  // '@snappmarket/use-geolocation',
  // '@snappmarket/use-route-change',
  // '@snappmarket/use-timer',
  //
  '@snappmarket/ui-accordion',
  '@snappmarket/ui-alert',
  '@snappmarket/ui-breadcrumb',
  '@snappmarket/ui-button',
  '@snappmarket/ui-checkbox',
  '@snappmarket/ui-confirm-dialog',
  '@snappmarket/ui-grid',
  '@snappmarket/ui-grid-system',
  '@snappmarket/ui-image',
  '@snappmarket/ui-input',
  '@snappmarket/ui-input-range',
  '@snappmarket/ui-json-ld',
  '@snappmarket/ui-label',
  '@snappmarket/ui-lined-text',
  '@snappmarket/ui-loading',
  '@snappmarket/ui-modal',
  '@snappmarket/ui-option-group',
  '@snappmarket/ui-pagination',
  '@snappmarket/ui-progress-bar',
  '@snappmarket/ui-skeleton',
  '@snappmarket/ui-slider',
  '@snappmarket/ui-tab-switcher',
  '@snappmarket/ui-table',
  '@snappmarket/ui-textwrap',
  '@snappmarket/ui-textarea',
  '@snappmarket/theme',
  '@snappmarket/ui-toggle',
  '@snappmarket/ui-tooltip',
];

packages.forEach((p) => {
  // const packageSigniture = `${p}@${version}`;

  // Run external tool synchronously
  if (shell.exec(`npm deprecate ${p} "Please use @snappmarket/ui instead (full tree-shakable)"`).code !== 0) {
    shell.echo(`Error: deprecate failed : ${p}`);
  }
});
