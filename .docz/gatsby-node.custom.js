// gatsby-node.js
const path = require('path');


console.log(__dirname);

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        '@snappmarket': path.resolve(__dirname, 'packages/')
      }
    }
  });
};
