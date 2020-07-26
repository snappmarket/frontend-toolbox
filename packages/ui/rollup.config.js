import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

const input = './packages/index.js';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'propTypes',
  'react-router-dom': 'reactRouterDom',
  'react-image': 'reactImage',
  'styled-components': 'styledComponents',
  'react-hgs-input-range': 'reactHgsInputRange',
  'isomorphic-unfetch': 'isomorphicUnfetch',
  polished: 'polished',
  'polished/lib/color/lighten': 'polishedLighten',
  'polished/lib/color/darken': 'polishedDarken',
  '@snappmarket/config': 'snappmarketConfig',
  '@snappmarket/helpers': 'snappmarketHelpers',
  '@snappmarket/hooks': 'snappmarketHooks',
  '@snappmarket/icons': 'snappmarketIcons',
  '@snappmarket/icons/sprite': 'snappmarketSpriteIcons',
};
const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  configFile: '../../babel.config.js',
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: 'node_modules/**',
  namedExports: {
    '../../node_modules/prop-types/index.js': [
      'elementType',
      'bool',
      'func',
      'object',
      'oneOfType',
      'element',
    ],
    '../../node_modules/react-is/index.js': [
      'ForwardRef',
      'isFragment',
      'isLazy',
      'isMemo',
      'Memo',
      'isValidElementType',
    ],
  },
};

function onwarn(warning) {
  if (
    warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
    warning.source === 'react' &&
    warning.names.filter(identifier => identifier !== 'useDebugValue')
      .length === 0
  ) {
    // only warn for
    // import * as React from 'react'
    // if (__DEV__) React.useDebugValue()
    // React.useDebug not fully dce'd from prod bundle
    // in the sense that it's still imported but unused. Downgrading
    // it to a warning as a reminder to fix at some point
    console.warn(warning.message);
  } else {
    throw Error(warning.message);
  }
}

export default [
  {
    input,
    onwarn,
    output: {
      file: 'dist/umd/ui.development.js',
      format: 'umd',
      name: 'SnappMarketHooks',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      postcss({ extract: true, plugins: [autoprefixer] }),
      copy({
        targets: [
          { src: input, dest: 'dist/es' },
          { src: input, dest: 'dist/esm' },
          { src: 'README.md', dest: 'dist' },
        ],
      }),
    ],
  },
  {
    input,
    onwarn,
    output: {
      file: 'dist/umd/ui.production.js',
      format: 'umd',
      name: 'SnappMarketHooks',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      postcss({ extract: true, plugins: [autoprefixer] }),
      terser(),
      filesize(),
    ],
  },
];
