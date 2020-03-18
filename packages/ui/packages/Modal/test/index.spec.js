import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Modal from '../index';


describe('Modal ui component tests', () => {
  it('Should render with default size and center position at default', () => {
    const { getByTestId } = render(
      <Wrapper><Modal visibility /></Wrapper>,
    );

    expect(getByTestId('modal')).toHaveStyle({
      width: 'calc(70 * 1rem)',
      top: '50%',
      transform: 'translateY(-50%)',
    });
  });

  // it('Should change style when get different types of position props', () => {
  //   const { rerender, getByTestId } = render(
  //     <Wrapper><Modal visibility position="top" /></Wrapper>,
  //   );

  //   expect(getByTestId('modal')).toHaveStyle({
  //     top: 'calc(1 * 1rem)',
  //   });

  //   rerender(<Wrapper><Modal visibility position="bottom" /></Wrapper>);
  //   expect(getByTestId('modal')).toHaveStyle({
  //     top: '100%',
  //     transform: 'translateY(calc(-100% - calc(1rem * 1)))',
  //   });
  // });

  it('Should add header in modal when get header props', () => {
    const { getByTestId } = render(
      <Wrapper><Modal visibility><span>modal header</span></Modal></Wrapper>,
    );

    expect(getByTestId('modalWrapper')).toContainHTML('<span>modal header</span>');
  });

  it('Should add close button modal when get handleClose props ', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper><Modal handleClose={() => {}} onOpen={callback} visibility /></Wrapper>,
    );
    const closeModalButton = getByTestId('closeModalButton');
    expect(callback).toHaveBeenCalledTimes(1);
    expect(getByTestId('modalWrapper')).toContainElement(closeModalButton);
  });

  it('Should call onOpen callback when get onOpen props', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper><Modal onOpen={callback} visibility /></Wrapper>,
    );

    expect(callback).toHaveBeenCalledTimes(1);
  });


  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper><Modal className="my-custom-class" visibility /></Wrapper>,
    );

    expect(getByTestId('modalWrapper')).toHaveClass('my-custom-class');
  });
});
