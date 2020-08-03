// gatsby-node.js
const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../packages'), 'node_modules'],
      alias: {
        '@snappmarket/ui': path.resolve(__dirname, '../packages/ui/'),
        '@snappmarket/helpers': path.resolve(__dirname, '../packages/helpers/'),
        '@snappmarket/hooks': path.resolve(__dirname, '../packages/hooks/'),
        '@snappmarket/config': path.resolve(__dirname, '../packages/config/'),
      }
    }
  });
};
