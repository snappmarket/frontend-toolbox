import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Toggle from '../index';

describe('Toggle ui component tests', () => {
  it('Should render with green status and size of 1.5rem at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Toggle />
      </Wrapper>,
    );

    expect(getByTestId('toggle')).toHaveStyle({
      backgroundColor: theme.colors.green.light,
      width: 'calc(1.5 * 1rem)',
      height: 'calc(1.5 * 1rem)',
    });
  });

  it('Should changes the style when selected props get false value', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Toggle selected={false} />
      </Wrapper>,
    );

    expect(getByTestId('toggle')).toHaveStyle({
      backgroundColor: theme.colors.gray.light,
      justifyContent: 'flex-end',
    });
  });
});
