import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { darken } from 'polished';

import { Wrapper, theme } from '../../../test/test.helpers';
import Skeleton from '../index';


describe('Skeleton ui component tests', () => {
  it('Should render with default props', () => {
    const { getByTestId } = render(
      <Wrapper><Skeleton /></Wrapper>,
    );

    expect(getByTestId('skeleton')).toHaveStyle({
      animationDuration: '3s',
      width: 'calc(3 * 1rem)',
      height: 'calc(3 * 1rem)',
      backgroundSize: 'calc(6 * 1rem)',
      radius: 'calc(0.5 * 1rem)',
    });

    it('Should changes the style when get justBorder, justifyContent and alignItems props', () => {
      const { rerender, getByTestId } = render(
        <Wrapper><Skeleton justBorder  /></Wrapper>,
      );

      expect(getByTestId('skeleton')).toHaveStyle({
        backgroundColor: 'transparent',
        border: `2px solid ${darken(0.06, theme.colors.white)}`,
      });

      rerender(<Wrapper><Skeleton justifyContent /></Wrapper>)
      expect(getByTestId('skeleton')).toHaveStyle({
        justifyContent: 'center',
      });

      rerender(<Wrapper><Skeleton alignItems /></Wrapper>)
      expect(getByTestId('skeleton')).toHaveStyle({
        alignItems: 'left',
      });

    });

    it('Should add class to element', () => {
      const { getByTestId } = render(
        <Wrapper><Skeleton className="my-custom-class" /></Wrapper>,
      );

      expect(getByTestId('skeleton')).toHaveClass('my-custom-class');
    });
  });
});
