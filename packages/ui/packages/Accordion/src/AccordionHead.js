import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { context as accordionContext } from './context/accordionContext';
import { StyledAccordionHead } from './style';

const AccordionHead = (props) => {
  const {
    id, children, onClick, onOpen, onClose, ...rest
  } = props;
  const { changeActive, activeAccordionId } = useContext(accordionContext);
  const isActive = activeAccordionId === id;
  const isChildFunction = typeof children === 'function';
  const open = () => changeActive(id);
  const close = () => changeActive('');

  if (isActive && onOpen) {
    onOpen();
  }

  if (!isActive && onClose) {
    onClose();
  }

  return (
    <StyledAccordionHead
      className={isActive ? 'activeAccordion' : ''}
      isActive={isActive}
      onClick={() => {
        /**
         * by passing onclick function you should handle changing
         */
        if (!isChildFunction) {
          if (onClick) {
            onClick(open, close, isActive);
          } else {
            open();
          }
        }
      }}
      {...rest}
    >
      {isChildFunction ? children(open, close, isActive) : children}
    </StyledAccordionHead>
  );
};

AccordionHead.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

AccordionHead.defaultProps = {};

export default AccordionHead;
