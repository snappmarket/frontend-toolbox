import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledToolbarWrapper, StyledToolbar } from './styles';

const Tooltip = (props) => {
  const {
    className, position, title, children,
  } = props;

  return (
    <StyledToolbarWrapper className={className}>
      {children}
      <StyledToolbar position={position}>{title}</StyledToolbar>
    </StyledToolbarWrapper>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Tooltip.defaultProps = {
  className: '',
  position: 'top',
};

export default Tooltip;
