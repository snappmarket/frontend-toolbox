import external from 'rollup-plugin-peer-deps-external';
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
    external(),
  ]
};
