import React from 'react';
import PropTypes from 'prop-types';

import { StyledToggleWrapper } from './styles';

const Toggle = (props) => {
  const {
    status, selected, size, disabled, className, ...rest
  } = props;

  const render = () => (
    <StyledToggleWrapper
      className={className}
      size={size}
      disabled={disabled}
      status={status}
      selected={selected}
      {...rest}
    >
      <span />
    </StyledToggleWrapper>
  );

  return render();
};

Toggle.propTypes = {
  status: PropTypes.oneOf(['gray', 'green', 'yellow', 'red', 'orange', 'blue']),
  className: PropTypes.string,
  selected: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
};
Toggle.defaultProps = {
  size: 1.5,
  status: 'green',
  selected: true,
  disabled: false,
};
export default Toggle;
