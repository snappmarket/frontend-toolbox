import * as React from 'react';
import { useEffect, useState, createRef } from 'react';
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

const Modal = (props) => {
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
  const modalRef = createRef();

  const [modalContainer, setModalContainer] = useState(null);
  const [position, setPosition] = useState(initialPosition);

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

    const body = document.getElementsByTagName('body')[0];
    body.style['overflow-y'] = 'hidden';
    setModalContainer(document.createElement('div'));

    handleVisibility();

    return () => {
      body.style['overflow-y'] = 'auto';
    };
  }, [handleClose, onOpen, visibility]);

  /**
   * Create container for modal portal
   */
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (modalContainer) {
      body.appendChild(modalContainer);
    }

    return () => {
      if (modalContainer) {
        body.removeChild(modalContainer);
      }
    };
  }, [modalContainer]);

  /**
   * Define modal position based on  window size
   */
  useEffect(() => {
    if (visibility && modalContainer) {
      const {
        current: { offsetHeight: modalHeight },
      } = modalRef;
      const { innerHeight: windowHeight } = window;
      if (modalHeight - 20 >= windowHeight) {
        setPosition('top');
      }
    }
  }, [position, modalContainer, visibility, modalRef]);

  const render = () => visibility ? (
    <StyledModalWrapper className={className}>
      <StyledLightBox onClick={handleClose || undefined} />
      <StyledModal width={width} position={position} ref={modalRef}>
        {handleClose && typeof handleClose === 'function' && (
          <StyledCloseModalButton
            className="close-modal-button"
            modifier="link"
            icon={<CrossIcon />}
            size="sm"
            color="gray"
            onClick={handleClose}
          />
        )}
        {!!header && <StyledModalHeader>{header}</StyledModalHeader>}
        {!!children && <StyledModalContent>{children}</StyledModalContent>}
        {!!footer && <StyledModalFooter>{footer}</StyledModalFooter>}
      </StyledModal>
    </StyledModalWrapper>
  ) : null;
  if (modalContainer) {
    return createPortal(render(), modalContainer);
  }
  return null;
};

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
