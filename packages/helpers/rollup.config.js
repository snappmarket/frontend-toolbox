import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

import pkg from './package.json';

export default {
  input : 'index.js',
  output: [
    {
      file     : pkg.main,
      format   : 'cjs',
      exports  : 'named',
      sourcemap: true
    },
    {
      file     : pkg.module,
      format   : 'es',
      exports  : 'named',
      sourcemap: true
    }
  ],
  plugins: [
    globals(),
    builtins(),
    external(),
    url({ exclude: ['**/*.svg'] }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType']
      }
    })
  ]
};
