import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import darken from 'polished/lib/color/darken';

import { Wrapper, theme } from '../../../test/test.helpers';
import { BoxSkeleton } from '../index';

describe('Skeleton ui component tests', () => {
  // TODO: check why this test fails
  // it('Should render with default props', () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <BoxSkeleton />
  //     </Wrapper>,
  //   );
  //
  //   expect(getByTestId('skeleton')).toHaveStyle({
  //     width: 'calc(3 * 1rem)',
  //     height: 'calc(3 * 1rem)',
  //     backgroundSize: 'calc(1rem * 6)',
  //     radius: 'calc(0.5 * 1rem)',
  //   });
  // });

  it('Should changes the style when get justBorder, justifyContent and alignItems props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <BoxSkeleton justBorder />
      </Wrapper>,
    );

    expect(getByTestId('skeleton')).toHaveStyle({
      backgroundColor: 'transparent',
      border: `2px solid ${darken(0.06, theme.colors.white)}`,
    });

    rerender(
      <Wrapper>
        <BoxSkeleton />
      </Wrapper>,
    );
    expect(getByTestId('skeleton')).toHaveStyle({
      justifyContent: 'center',
    });

    rerender(
      <Wrapper>
        <BoxSkeleton />
      </Wrapper>,
    );
    expect(getByTestId('skeleton')).toHaveStyle({
      alignItems: 'center',
    });
    rerender(
      <Wrapper>
        <BoxSkeleton justifyContent="flex-start" />
      </Wrapper>,
    );
    expect(getByTestId('skeleton')).toHaveStyle({
      justifyContent: 'flex-start',
    });

    rerender(
      <Wrapper>
        <BoxSkeleton alignItems="flex-start" />
      </Wrapper>,
    );
    expect(getByTestId('skeleton')).toHaveStyle({
      alignItems: 'flex-start',
    });
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <BoxSkeleton className="my-custom-class" />
      </Wrapper>,
    );

    expect(getByTestId('skeleton')).toHaveClass('my-custom-class');
  });
});
