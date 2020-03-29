import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import ConfirmDialog from '../index';

describe('ConfirmDialog ui component tests', () => {
  it('Should add icon in ConfirmDialog when get icon props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ConfirmDialog
          visibility
          title="for test"
          description="for test"
          acceptTitle="for test"
          dismissTitle="for test"
          icon={
            <svg height="100" width="100" data-testid="confirmIcon">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                strokeWidth="3"
                fill="red"
              />
            </svg>
          }
          onClose={() => console.log('test')}
          onDismiss={() => console.log('test')}
          onAccept={() => console.log('test')}
        />
      </Wrapper>,
    );
    const confirmIcon = getByTestId('confirmIcon');

    expect(getByTestId('modalWrapper')).toContainElement(confirmIcon);
  });
});
