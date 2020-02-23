module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  ignore: ['node_modules/**', /@babel[\\|/]runtime/],
  plugins: [
    ['babel-plugin-styled-components'],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-transform-runtime', { useESModules: true }],
  ],
};
