const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fse = require('fs-extra');
const path = require('path');
const Icons = require('./dist');

// RENDER TEST
Object.keys(Icons).forEach(async icon => {
  console.log(icon);
  console.log("\n");
  const Icon = Icons[icon];
  const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Icon, {toWhat: 'World'}, null));

  await fse.writeFile(`${icon}.svg`, html,'utf8');

  // console.log(html);
});
