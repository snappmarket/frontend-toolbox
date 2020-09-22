import * as React from 'react';
import PropTypes from 'prop-types';
import { CheckMarkIcon, CircleIcon, MinusIcon } from '@iconbox/snappmarket';

import { StyledCheckboxWrapper } from './styles';

const CheckBox = ({
  status,
  selected,
  size,
  disabled,
  className,
  border,
  selectedIcon,
  disabledIcon,
  disabledCircleIcon,
}) => {
  const SelectedIcon = selectedIcon || <CheckMarkIcon size={size} />;
  const DisabledIcon = disabledIcon || <MinusIcon size={size} />;
  const DisabledCircleIcon = disabledCircleIcon || <CircleIcon size={size} />;

  return (
    <StyledCheckboxWrapper
      data-testid="checkBox"
      role="checkbox"
      tabIndex="0"
      aria-checked={selected ? 'true' : 'false'}
      className={`${className} ${border ? 'has-border' : ''} ${
        selected ? 'selected' : 'not-selected'
      } `}
      disabled={disabled}
      type="button"
      size={size}
      status={status}
      border={border}
      selected={selected}
    >
      {selected && !disabled ? SelectedIcon : ''}
      {/* eslint-disable-next-line no-nested-ternary */}
      {disabled
        ? className.includes('circle')
          ? DisabledCircleIcon
          : DisabledIcon
        : ''}
    </StyledCheckboxWrapper>
  );
};

CheckBox.propTypes = {
  status: PropTypes.oneOf(['gray', 'green', 'yellow', 'red', 'orange', 'blue']),
  className: PropTypes.string,
  border: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  selectedIcon: PropTypes.node,
  disabledIcon: PropTypes.node,
  disabledCircleIcon: PropTypes.node,
};

CheckBox.defaultProps = {
  size: 2,
  status: 'green',
  selected: false,
  border: true,
  disabled: false,
  className: '',
};
export default CheckBox;
