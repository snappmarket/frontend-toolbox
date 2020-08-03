import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
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
  describe('test the position of the modal based on position prop', () => {
    it('Should render modal fixed on top of the page', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility position="top" />
        </Wrapper>,
      );
      const modal = getByTestId('modal');
      expect(modal).toHaveStyle(`top: calc(${theme.defaultRem} * 1)`);
    });
    it('Should render modal fixed on center of the page', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility position="center" />
        </Wrapper>,
      )
      const modal = getByTestId('modal');
      expect(modal).toHaveStyle({
        transform: `translateZ(0) translateY(-50%) scale(1)`,
      });
    });
    it('Should render modal fixed on bottom of the page', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility position="bottom" />
        </Wrapper>,
      );
      const modal = getByTestId('modal');
      expect(modal).toHaveStyle({
        transform: `translateZ(0) translateY(calc(-100% - calc(${theme.defaultRem} * 1))) scale(1)`,
      });
    });
    it('Should ignore the given position by prop and set the position to top cause window height is less than modal height', () => {
      const originalHeight = window.innerHeight;
      window.innerHeight = -20;
      const { getByTestId } = render(
        <Wrapper>
          <Modal visibility position="center" />
        </Wrapper>,
      );
      const modal = getByTestId('modal');
      expect(modal).toHaveStyle(`top: calc(${theme.defaultRem} * 1)`);
      window.innerHeight = originalHeight;
    });
  });

  describe('open and close callbacks tests', () => {
    const ModalWrapperComponent = ({onClose, onOpen}) => {
      const [visibility, setVisibility] = useState(false);
      const handleClose = () => {
        onClose();
        setVisibility(false);
      }
      return (
        <>
          <button
            onClick={() => setVisibility(true)}
            data-testid="modalOpener"
          >
            open the modal
          </button>
          <Modal
            visibility={visibility}
            handleClose={handleClose}
            onOpen={onOpen}
          />
        </>
      )
    }

    it('should test modal close button click', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();
      const { getByTestId } = render(
        <Wrapper>
          <ModalWrapperComponent onClose={onClose} onOpen={onOpen} />
        </Wrapper>,
      );
      const modalOpener = getByTestId('modalOpener');
      expect(onOpen).toHaveBeenCalledTimes(0);
      expect(onClose).toHaveBeenCalledTimes(0);

      fireEvent.click(modalOpener);
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(0);

      const closeModalButton = getByTestId('closeModalButton');
      fireEvent.click(closeModalButton);
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);

      fireEvent.click(modalOpener);
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(1);

      const modalLightBox = getByTestId('modalLightBox');
      fireEvent.click(modalLightBox);
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(2);

    });
  });
});
