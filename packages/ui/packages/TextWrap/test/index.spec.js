import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import TextWrap from '../index';

describe('TextWrap ui component tests', () => {
  it('Should render content', () => {
    const { getByTestId } = render(
      <Wrapper>
        <TextWrap lines={1}>
          content
        </TextWrap>
      </Wrapper>,
    );
    expect(getByTestId('textWrap')).toContainHTML('content');
  });
  it('Should change the height of the text wrap component show only one line', () => {
    const originalGetComputedStyle = window.getComputedStyle;
    jest.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      getPropertyValue: () => '20px'
    }))
    const { getByTestId } = render(
      <Wrapper>
        <TextWrap lines={2}>
          content
        </TextWrap>
      </Wrapper>,
    );
    jest.spyOn(window, 'getComputedStyle').mockImplementation(originalGetComputedStyle)

    expect(getByTestId('textWrap')).toContainHTML('content');
    expect(getByTestId('textWrap')).toHaveStyle('max-height: 40px;');
  });

  it('Should render with the className', () => {
    const { getByTestId } = render(
      <Wrapper>
        <TextWrap className="foo" lines={1}>
          content
        </TextWrap>
      </Wrapper>,
    );
    expect(getByTestId('textWrap')).toHaveClass('foo');
  });
});
