import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Wrapper } from '../../../test/test.helpers';
import { Grid } from '../../index';

describe('Grid ui component tests', () => {
  it('Should render grid with perRow of 4 ', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Grid perRow={4}>
          <div data-testid="gridChild">test</div>
        </Grid>
      </Wrapper>,
    );
    expect(getByTestId('gridChild')).toHaveStyle({
      width: '25%',
    });
  });

  it('Should render children', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Grid perRow="1">
          <div data-testid="gridChild">test</div>
        </Grid>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild');
    expect(getByTestId('grid')).toContainElement(gridChild);
  });

  it('Should render responsive children', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Grid perRow={{xs: 12, md: 6}}>
          <div data-testid="gridChild">test</div>
        </Grid>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild');
    expect(getByTestId('grid')).toContainElement(gridChild);
  });
});
