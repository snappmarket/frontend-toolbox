import * as React from 'react';
import PropTypes from 'prop-types';
import {
  CheckMarkIcon,
  CircleIcon,
  MinusIcon,
} from '@snappmarket/icons';

import { StyledCheckboxWrapper } from './styles';

const CheckBox = props => {
  const { status, selected, size, disabled, className, border } = props;

  const render = () => (
    <StyledCheckboxWrapper
      data-testid="checkBox"
      role="checkbox"
      tabIndex="0"
      aria-checked={selected ? 'true' : 'false'}
      className={className}
      disabled={disabled}
      type="button"
      size={size}
      status={status}
      border={border}
      selected={selected}
    >
      {selected && !disabled ? <CheckMarkIcon size={size} /> : ''}
      {disabled && className !== 'circle' ? <MinusIcon size={size} /> : ''}
      {className === 'circle' && disabled ? <CircleIcon size={size} /> : ''}
    </StyledCheckboxWrapper>
  );

  return render();
};

CheckBox.propTypes = {
  status: PropTypes.oneOf(['gray', 'green', 'yellow', 'red', 'orange', 'blue']),
  className: PropTypes.string,
  border: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
};
CheckBox.defaultProps = {
  size: 2,
  status: 'green',
  selected: false,
  border: true,
  disabled: false,
};
export default CheckBox;
