import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>minus</title>
    <path d="M29.61 17.152h-27.178c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h27.178c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0z" />{' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
