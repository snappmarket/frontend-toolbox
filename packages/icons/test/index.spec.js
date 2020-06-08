import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Wrapper } from '@snappmarket/ui/test/test.helpers';
import '@testing-library/jest-dom/extend-expect';
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


// Sprite RENDER TEST
describe.each(Object.keys(SpriteIcons))('Sprite Icons render test : ', icon => {
  const Icon = SpriteIcons[icon];

  it(`should render ${icon} with proper class and size`, () => {
    const { getByTestId } = render(
      <Wrapper >
        <Icon className="my-custom-class" size={2} />
      </Wrapper>,
    );

    expect(getByTestId(icon)).toHaveClass('my-custom-class');
    expect(getByTestId(icon)).toHaveStyle({
      width: '20px',
      height: '20px',
    });
  });

  it(`should render default href path`, () => {
    const { getByTestId } = render(
      <Wrapper options={{
        importSpriteSVG: true,
        useSpriteFile: true,
      }}>
        <Icon />
      </Wrapper>,
    );
    expect(getByTestId(`${icon}Href`)).toHaveAttribute('xlink:href',`/sprite.svg#${icon}`);
  });
});

describe.each(Object.keys(SpriteIcons))('Sprite Icons render test : ', icon => {
  it(`should render correct href path`, () => {
    const Icon = SpriteIcons[icon];
    const { getByTestId } = render(
      <Wrapper
        options={{
          importSpriteSVG: true,
          useSpriteFile: true,
          publicPath: 'Test',
          spriteSvgName: 'randomName.svg'
        }}
      >
        <Icon />
      </Wrapper>,
    );

    expect(getByTestId(`${icon}Href`)).toHaveAttribute('xlink:href',`/Test/randomName.svg#${icon}`);
  });
});
