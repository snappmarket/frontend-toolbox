import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CrossIcon } from '@snappmarket/icons';

import { StyledAlertWrapper, StyledCloseButton } from './styles';

const Alert = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    status, closable, onClose, children, className,
  } = props;

  let options = {};
  switch (status) {
    case 'error':
      options = {
        bgColor: 'red',
        bgShade: 'bright',
        color: 'red',
        colorShade: 'dark',
      };
      break;
    case 'info':
      options = {
        bgColor: 'blue',
        bgShade: 'bright',
        color: 'blue',
        colorShade: 'dark',
      };
      break;
    case 'warning':
      options = {
        bgColor: 'yellow',
        bgShade: 'bright',
        color: 'yellow',
        colorShade: 'dark',
      };
      break;
    case 'success':
      options = {
        bgColor: 'green',
        bgShade: 'bright',
        color: 'green',
        colorShade: 'dark',
      };
      break;
    default:
      options = {
        bgColor: 'orange',
        bgShade: 'bright',
        color: 'orange',
        colorShade: 'dark',
      };
  }

  const handleCloseAlert = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    isOpen && (
      <StyledAlertWrapper className={className} {...options}>
        {closable && (
          <StyledCloseButton
            onClick={handleCloseAlert}
            icon={<CrossIcon className="closeIcon" />}
            modifier="link"
            color="gray"
            className="circle d-inline-block pull-left closeBtn"
            shade="ultra-light"
            size="xs"
          />
        )}
        {children}
      </StyledAlertWrapper>
    )
  );
};

Alert.propTypes = {
  status: PropTypes.oneOf(['error', 'info', 'warning', 'success']),
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  closable: PropTypes.bool,
};

Alert.defaultProps = {
  onClose: (f) => f,
  closable: true,
};

export default Alert;
