import React, { useEffect, useState, createRef, forwardRef, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { CrossIcon } from '@snappmarket/icons';

import {
  StyledModalWrapper,
  StyledLightBox,
  StyledModal,
  StyledCloseModalButton,
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter,
} from './styles';

const Modal = forwardRef((props, ref) => {
  const {
    className,
    handleClose,
    onOpen,
    header,
    children,
    footer,
    visibility,
    width,
    position: initialPosition,
  } = props;
  const bodyRef = useRef(null)
  const modalRef = createRef();
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    bodyRef.current = document.body;
  }, [])

  /**
   * Set scroll of body
   */
  useEffect(() => {
    const handleVisibility = () => {
      if (visibility) {
        if (!!onOpen && typeof onOpen === 'function') {
          onOpen();
        }
      } else if (!!handleClose && typeof handleClose === 'function') {
        handleClose();
      }
    };

    const { body } = document;
    body.style['overflow-y'] = 'hidden';

    handleVisibility();

    return () => {
      body.style['overflow-y'] = 'auto';
    };
  }, [handleClose, onOpen, visibility]);

  /**
   * Define modal position based on  window size
   */
  useEffect(() => {
    if (visibility) {
      const {
        current: { offsetHeight: modalHeight },
      } = modalRef;
      const { innerHeight: windowHeight } = window;
      if (modalHeight - 20 >= windowHeight) {
        setPosition('top');
      }
    }
  }, [position, visibility, modalRef]);

  const render = () =>
    visibility ? (
      <StyledModalWrapper
        data-testid="modalWrapper"
        className={className}
        ref={ref}
      >
        <StyledLightBox onClick={handleClose || undefined} />
        <StyledModal
          data-testid="modal"
          width={width}
          position={position}
          ref={modalRef}
        >
          {handleClose && typeof handleClose === 'function' && (
            <StyledCloseModalButton
              data-testid="closeModalButton"
              className="close-modal-button"
              modifier="link"
              icon={<CrossIcon />}
              size="sm"
              color="gray"
              onClick={handleClose}
            />
          )}
          {!!header && (
            <StyledModalHeader data-testid="modalHeader">
              {header}
            </StyledModalHeader>
          )}
          {!!children && (
            <StyledModalContent data-testid="modalContent">
              {children}
            </StyledModalContent>
          )}
          {!!footer && (
            <StyledModalFooter data-testid="modalFooter">
              {footer}
            </StyledModalFooter>
          )}
        </StyledModal>
      </StyledModalWrapper>
    ) : null;

  if(bodyRef.current) {
    return createPortal(render(), bodyRef.current);
  }
  return null;
});

Modal.propTypes = {
  className: PropTypes.string,
  visibility: PropTypes.bool,
  handleClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onOpen: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
  width: PropTypes.number,
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
};

Modal.defaultProps = {
  className: '',
  visibility: false,
  handleClose: false,
  onOpen: () => {},
  header: null,
  children: <></>,
  footer: null,
  width: 70,
  position: 'center',
};

export default Modal;
