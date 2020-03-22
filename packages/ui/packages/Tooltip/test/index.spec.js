import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Tooltip from '../index';


describe('Tooltip ui component tests', () => {
  it('Should changes the style when get different types of position props and title props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper><Tooltip position='top'>tooltip title</Tooltip></Wrapper>,
    );

    expect(getByTestId('tooltip')).toHaveStyle({
   
      top: 'calc(1rem * -1)',
      transform: 'translate(-50%, -100%)',
    });

    rerender(<Wrapper><Tooltip position='bottom'>tooltip title</Tooltip></Wrapper>)
    expect(getByTestId('tooltip')).toHaveStyle({
      left: '50%',
      bottom: 'calc(1rem * -1)',
      transform: 'translate(-50%, -100%)',
    });

    rerender(<Wrapper><Tooltip position='left'>tooltip title</Tooltip></Wrapper>)
    expect(getByTestId('tooltip')).toHaveStyle({
      left: 'calc(1rem * -1)',
      top: '50%',
      transform: 'translate(-100%, -50%)',
    });

    rerender(<Wrapper><Tooltip position='right'>tooltip title</Tooltip></Wrapper>)
    expect(getByTestId('tooltip')).toHaveStyle({
      right: 'calc(1rem * -1)',
      top: '50%',
      transform: 'translate(-100%, -50%)',
    });

    rerender(<Wrapper><Tooltip position='right'>tooltip title</Tooltip></Wrapper>)
    expect(getByTestId('tooltip')).toContainHTML('tooltip title')
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper><Tooltip className="my-custom-class">tooltip title</Tooltip></Wrapper>,
    );

    expect(getByTestId('tooltipWrapper')).toHaveClass('my-custom-class');
  });

  it('Should add children in tooltip wrapper when get children props', () => {
    const { getByTestId } = render(
      <Wrapper><Tooltip><div><h3>tooltip wrapper children</h3></div></Tooltip></Wrapper>,
    );

    expect(getByTestId('tooltipWrapper')).toContainHTML('<div><h3>tooltip wrapper children</h3></div>')
  });
  
});
