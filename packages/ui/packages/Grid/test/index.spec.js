import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import {Grid} from '../../index';


describe('Grid ui component tests', () => {
  // it('Should render grid with perRow of 4 ', () => {
  //   const { getByTestId } = render(
  //     <Wrapper><Grid perRow={4}>
  //       <div data-testid='gridChild'>test</div>
  //     </Grid>
  //     </Wrapper>,
  //   );
  //   expect(getByTestId('gridChild')).toHaveStyle({
  //     width: 'calc(100% / 4)',
  //   });
  // });

  it('Should render children', () => {
    const { getByTestId } = render(
      <Wrapper><Grid perRow='1' >
        <div data-testid="gridChild">test</div>
      </Grid>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild')
    expect(getByTestId('grid')).toContainElement(gridChild)
  });

});
