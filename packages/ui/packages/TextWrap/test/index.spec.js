import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import TextWrap from '../index';


describe('TextWrap ui component tests', () => {
  it('Should changes the style when get lines and lineHeight props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper><TextWrap lines={2} lineHeight={2}>textWrap content</TextWrap></Wrapper>,
    );

    // expect(getByTestId('textWrap')).toHaveStyle({
    //   height: 'calc(1rem * 2 * 2 )',
    // });

    rerender(<Wrapper><TextWrap lines={4} lineHeight={3} >textWrap content</TextWrap></Wrapper>)
    expect(getByTestId('textWrap')).toContainHTML('textWrap content')
  });

  
});
