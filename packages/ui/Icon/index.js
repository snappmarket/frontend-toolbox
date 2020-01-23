import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styles';

const Icon = props => {
  const { name, size, className } = props;
  return (
    <StyledIcon
      className={`icon icon-${name} ${className || ''}`}
      size={size}
    />
  );
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
Icon.defaultProps = {
  size: 1,
};
export default Icon;
