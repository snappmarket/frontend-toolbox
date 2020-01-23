import React from 'react';
import renderer from 'react-test-renderer';

import BasicForm from './../src/index';

describe('Button', () => {
  test('hook did called successfully', () => {
    const tree = renderer.create(<BasicForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
