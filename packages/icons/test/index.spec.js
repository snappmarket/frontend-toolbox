import React from 'react';
import ReactDOM from 'react-dom';
import * as Icons from '../packages/index';
import * as SpriteIcons from '../packages/sprite/index';

// RENDER TEST
describe.each(Object.keys(Icons))('Icons render test : ', icon => {
  it(`should render ${icon} without crashing`, () => {
    const div = document.createElement('div');
    const Icon = Icons[icon];

    ReactDOM.render(<Icon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

// RENDER TEST
describe.each(Object.keys(SpriteIcons))('Sprite Icons render test : ', icon => {
  it(`should render ${icon} without crashing`, () => {
    const div = document.createElement('div');
    const Icon = Icons[icon];

    ReactDOM.render(<Icon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
