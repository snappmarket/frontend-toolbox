import * as React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size, color }) => (
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
    fill={color}
  >
    <title>menu</title>
    <path d="M28.842 4.266h-25.898c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h25.898c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM28.842 17.152h-25.898c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h25.898c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM28.842 30.038h-25.898c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h25.898c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconName.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default IconName;
