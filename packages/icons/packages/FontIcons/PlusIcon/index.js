import * as React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.971 47.971"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <path d="M16.086 30.038c-0.566 0-1.024-0.458-1.024-1.024v0-26.496c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 26.496c0 0.566-0.458 1.024-1.024 1.024v0zM29.334 16.79h-26.496c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h26.496c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0z" />
  </svg>
);
PlusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

PlusIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default PlusIcon;
