import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Tooltip from '../index';

describe('Tooltip ui component tests', () => {
  it('Should changes the style when get different types of position props and title props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Tooltip title="tooltip title" position="top">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );

    expect(getByTestId('tooltip')).toHaveStyle({
      left: '50%',
      top: 'calc(1rem * -1)',
    });

    rerender(
      <Wrapper>
        <Tooltip title="tooltip title" position="bottom">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );
    expect(getByTestId('tooltip')).toHaveStyle({
      left: '50%',
      bottom: 'calc(1rem * -1)',
    });

    rerender(
      <Wrapper>
        <Tooltip title="tooltip title" position="left">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );
    expect(getByTestId('tooltip')).toHaveStyle({
      left: 'calc(1rem * -1)',
      top: '50%',
    });

    rerender(
      <Wrapper>
        <Tooltip title="tooltip title" position="right">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );
    expect(getByTestId('tooltip')).toHaveStyle({
      right: 'calc(1rem * -1)',
      top: '50%',
    });

    rerender(
      <Wrapper>
        <Tooltip title="tooltip title" position="right">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );
    expect(getByTestId('tooltip')).toContainHTML('tooltip');
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Tooltip title="tooltip title" className="my-custom-class">
          tooltip content
        </Tooltip>
      </Wrapper>,
    );

    expect(getByTestId('tooltipWrapper')).toHaveClass('my-custom-class');
  });

  it('Should add children in tooltip wrapper when get children props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Tooltip title="tooltip title">
          <div>
            <h3>tooltip wrapper children</h3>
          </div>
        </Tooltip>
      </Wrapper>,
    );

    expect(getByTestId('tooltipWrapper')).toContainHTML(
      '<div><h3>tooltip wrapper children</h3></div>',
    );
  });
});
