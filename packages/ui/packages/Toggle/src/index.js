import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledToggleWrapper } from './styles';

const Toggle = props => {
  const { status, selected, size, disabled, className, ...rest } = props;

  const render = () => (
    <StyledToggleWrapper
      data-testid="toggle"
      role="button"
      tabIndex="0"
      aria-pressed={selected ? 'true' : 'false'}
      className={`${className} ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
      size={size}
      status={status}
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
