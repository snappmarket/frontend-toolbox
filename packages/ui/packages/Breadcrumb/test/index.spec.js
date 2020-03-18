import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Breadcrumb from '../index';
// import IconName from '../../../../icons/packages/FontIcons/InfoIcon';

describe('Breadcrumb ui component tests', () => {
  it('Should render with primary mode and blue color with normal shade and lg size at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Breadcrumb />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: theme.colors.blue.normal,
      color: theme.colors.white,
      height: 'calc(4.5 * 1rem)',
      fontSize: 'calc(1.8 * 1rem)',
      minWidth: 'calc(20.6 * 1rem)',
    });
  });
});
