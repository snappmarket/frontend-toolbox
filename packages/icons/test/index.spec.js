import React from 'react';
import ReactDOM from 'react-dom';
import * as Icons from '../packages/index';

// RENDER TEST
describe('Icons render test : ', () => {
  Object.keys(Icons).forEach((icon) => {
    it(`should render ${icon} without crashing`, () => {
      const div = document.createElement('div');
      const Icon = Icons[icon];

      ReactDOM.render(<Icon />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
