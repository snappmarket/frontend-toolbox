module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-export-default-from',
  ],
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@babel/preset-react',
  ],
  sourceType: 'unambiguous',
  env: {
    test: {
      plugins: [
        "transform-es2015-modules-commonjs",
        "dynamic-import-node"
      ]
    }
  }
};
