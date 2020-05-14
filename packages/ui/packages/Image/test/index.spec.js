import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Image from '../index';

describe('Image ui component tests', () => {
  it('Should show loading when image wants to load', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Image src="test.jpg" />
      </Wrapper>,
    );

    expect(getByTestId('logoAnimation')).toBeVisible();
  });
});
