import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import LinedText from '../index';

describe('linedText ui component tests', () => {
  it('Should changes the class when get different colors and type props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <LinedText>
          <span>test</span>
        </LinedText>
      </Wrapper>,
    );

    expect(getByTestId('linedText')).toContainHTML('<span>test</span>');
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <LinedText className="my-custom-class" />
      </Wrapper>,
    );

    expect(getByTestId('linedText')).toHaveClass('my-custom-class');
  });
});
