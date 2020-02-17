import React from 'react';
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
    width="23"
    height="32"
    viewBox="0 0 23 32"
    fill={color}
  >
    <title>export</title>
    <path d="M0 9.333h6.667v1.333h-6.667v-1.333zM0 10.667h1.333v20h-1.333v-20zM0 30.667h22.667v1.333h-22.667v-1.333zM21.333 9.333h1.333v21.333h-1.333v-21.333zM16 9.333h5.333v1.333h-5.333v-1.333zM10.667 0h1.333v21.333h-1.333v-21.333zM9.333 1.333h1.333v2.667h-1.333v-2.667zM8 2.667h1.333v2.667h-1.333v-2.667zM6.667 4h1.333v2.667h-1.333v-2.667zM12 1.333h1.333v2.667h-1.333v-2.667zM13.333 2.667h1.333v2.667h-1.333v-2.667zM14.667 4h1.333v2.667h-1.333v-2.667z" />
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
