import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Modal from '../index';

describe('Modal ui component tests', () => {
  describe('Modal render tests', () => {
    it('Should not render the modal', () => {
      const {queryByTestId} = render(
        <Wrapper>
          <Modal visibility={false}/>
        </Wrapper>,
      );
      expect(queryByTestId('modalWrapper')).toBeFalsy();
    });
    it('Should render child', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility>
            <div data-testid='modalChild'>
              this is some description in modal
            </div>
          </Modal>
        </Wrapper>,
      );
      const modalContent = getByTestId('modalContent');
      const modalChild = getByTestId('modalChild');
      expect(modalContent).toContainElement(modalChild);
    });
    it('Should render header', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal
            visibility
            header={(
              <div data-testid='modalHeaderContent'>
                this is the header of the modal
              </div>
            )}
          />
        </Wrapper>,
      );
      const modalHeader = getByTestId('modalHeader');
      const modalHeaderContent = getByTestId('modalHeaderContent');
      expect(modalHeader).toContainElement(modalHeaderContent);
    });
    it('Should render footer', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal
            visibility
            footer={(
              <div data-testid='modalFooterContent'>
                this is the footer of the modal
              </div>
            )}
          />
        </Wrapper>,
      );
      const modalFooter = getByTestId('modalFooter');
      const modalFooterContent = getByTestId('modalFooterContent');
      expect(modalFooter).toContainElement(modalFooterContent);
    });
    it('Should render close button when modal is closable', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility handleClose={() => {}} />
        </Wrapper>,
      );
      const modalWrapper = getByTestId('modalWrapper');
      const closeModalButton = getByTestId('closeModalButton');
      expect(modalWrapper).toContainElement(closeModalButton);
    });
  });
  describe('open and close callbacks tests', () => {
    
  });

  // it('Should add header in modal when get header props', () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <Modal
  //         visibility
  //         header={<span>modal header</span>}
  //       >
  //       </Modal>
  //     </Wrapper>,
  //   );
  //
  //   expect(getByTestId('modalHeader')).toContainHTML(
  //     '<span>modal header</span>',
  //   );
  // });
  //
  // it('Should add close button modal when get handleClose props and call handleClose when close button has been clicked ', () => {
  //   const handleClose = jest.fn();
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <Modal handleClose={handleClose} visibility />
  //     </Wrapper>,
  //   );
  //   const closeModalButton = getByTestId('closeModalButton');
  //   expect(getByTestId('modalWrapper')).toContainElement(closeModalButton);
  //
  //   expect(handleClose).toHaveBeenCalledTimes(0);
  //   fireEvent.click(closeModalButton);
  //   expect(handleClose).toHaveBeenCalledTimes(1);
  //
  // });
  //
  // it('Should call onOpen callback when get onOpen props', () => {
  //   const onOpen = jest.fn();
  //   render(
  //     <Wrapper>
  //       <Modal onOpen={onOpen} visibility />
  //     </Wrapper>,
  //   );
  //   expect(onOpen).toHaveBeenCalledTimes(1);
  // });
  //
  // it('Should add class to element', () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <Modal className="my-custom-class" visibility />
  //     </Wrapper>,
  //   );
  //
  //   expect(getByTestId('modalWrapper')).toHaveClass('my-custom-class');
  // });
});
