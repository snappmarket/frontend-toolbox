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
};
