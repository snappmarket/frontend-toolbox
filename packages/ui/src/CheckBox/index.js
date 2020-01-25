import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import { StyledCheckboxWrapper } from './styles';

const CheckBox = props => {
  const { status, selected, size, disabled, className, border } = props;

  const render = () => (
    <StyledCheckboxWrapper
      className={className}
      disabled={disabled}
      size={size}
      status={status}
      border={border}
      selected={selected}
    >
      {selected && !disabled ? <Icon name='check-mark' size={size} /> : ''}
      {disabled && className !== 'circle' ? (
        <Icon name='minus' size={size} />
      ) : (
        ''
      )}
      {className === 'circle' && disabled ? (
        <Icon name='circle' size={size} />
      ) : (
        ''
      )}
    </StyledCheckboxWrapper>
  );

  return render();
};

CheckBox.propTypes = {
  status   : PropTypes.oneOf(['gray', 'green', 'yellow', 'red', 'orange', 'blue']),
  className: PropTypes.string,
  border   : PropTypes.bool,
  selected : PropTypes.bool,
  size     : PropTypes.number,
  disabled : PropTypes.bool
};
CheckBox.defaultProps = {
  size    : 2,
  status  : 'green',
  selected: false,
  border  : true,
  disabled: false
};
export default CheckBox;
