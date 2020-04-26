import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import inlineSvg from 'rollup-plugin-inline-svg';

const input = './packages/index.js';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const babelOptions = {
  exclude: /node_modules/,
  runtimeHelpers: true,
  configFile: '../../babel.config.js',
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
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
  throw Error(warning.message);
}

export default [
  {
    input,
    onwarn,
    output: {
      file: 'dist/umd/icons.development.js',
      format: 'umd',
      name: 'SnappMarketIcons',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      inlineSvg(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
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
      file: 'dist/umd/icons.production.js',
      format: 'umd',
      name: 'SnappMarketIcons',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      inlineSvg({
        removeTags: true,
        removingTags: ['title', 'desc', 'style'],
        warnTags: [],
        removeSVGTagAttrs: false,
        removingTagAttrs: [],
        warnTagAttrs: [],
      }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      terser(),
      filesize(),
    ],
  },
];
