import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import ProgressBar from '../index';

describe('ProgressBar ui component tests', () => {
  it('Should changes the style when get percent props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ProgressBar percent={40}>
          <span>test</span>
        </ProgressBar>
      </Wrapper>,
    );

    expect(getByTestId('progressBar')).toHaveStyle({
      width: '40%',
    });
  });

  it('Should render progressBar', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ProgressBar percent={4} />
      </Wrapper>,
    );
    const progressBar = getByTestId('progressBar');
    expect(getByTestId('progressBarWrapper')).toContainElement(progressBar);
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ProgressBar className="my-custom-class" percent={4}></ProgressBar>
      </Wrapper>,
    );

    expect(getByTestId('progressBarWrapper')).toHaveClass('my-custom-class');
  });
});
