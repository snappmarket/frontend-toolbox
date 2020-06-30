import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Countdown from '../index';

describe('Countdown ui component tests', () => {
  describe('Countdown rendering tests', () => {
    it('Should add classname to countdown', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Countdown className="foo" date={new Date()} />
        </Wrapper>,
      );
      const countdown = getByTestId('countdown');

      expect(countdown).toBeTruthy();
      expect(countdown).toHaveClass('foo');
    });

    it('Should render the countdown with default template', () => {
      const { getByTestId, queryAllByTestId } = render(
        <Wrapper>
          <Countdown date={new Date()} />
        </Wrapper>,
      );
      const countdown = getByTestId('countdown-wrapper');
      const countdownItem = queryAllByTestId('countdown-items');

      expect(countdown).toBeTruthy();
      expect(countdownItem).toBeTruthy();
    });
    it('Should render the countdown with custom template', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Countdown date={new Date()}>
            {({seconds}) => (
              <>
                <span data-testid="seconds">{seconds}</span>
                <small data-testid="label">second</small>
              </>
            )}
          </Countdown>
        </Wrapper>,
      );
      const seconds = getByTestId('seconds');
      const label = getByTestId('label');

      expect(seconds).toBeTruthy();
      expect(label).toBeTruthy();
    });
  });
  describe('Countdown props tests', () => {
    describe('Countdown callback tests', () => {
      expect(Countdown.defaultProps.onStart('foo')).toBe('foo');
      expect(Countdown.defaultProps.onEnd('foo')).toBe('foo');
    });
  });
});
