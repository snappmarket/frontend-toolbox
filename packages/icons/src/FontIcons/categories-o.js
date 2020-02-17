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
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={color}
  >
    <title>categories-o</title>
    <path d="M13.295 14.392h-10.863c-0.566 0-1.024-0.458-1.024-1.024v0-10.86c0-0.566 0.458-1.024 1.024-1.024v0h10.86c0.566 0 1.024 0.458 1.024 1.024v0 10.86c0 0 0 0 0 0 0 0.564-0.456 1.022-1.020 1.024h-0zM3.456 12.344h8.815v-8.812h-8.815zM29.633 14.392h-10.86c-0.566 0-1.024-0.458-1.024-1.024v0-10.86c0-0.566 0.458-1.024 1.024-1.024v0h10.86c0.566 0 1.024 0.458 1.024 1.024v0 10.86c0 0.566-0.458 1.024-1.024 1.024v0zM19.798 12.344h8.812v-8.812h-8.812zM13.295 30.237h-10.863c-0.566 0-1.024-0.458-1.024-1.024v0-10.86c0-0.566 0.458-1.024 1.024-1.024v0h10.86c0.566 0 1.024 0.458 1.024 1.024v0 10.86c0 0 0 0 0 0 0 0.564-0.456 1.022-1.020 1.024h-0zM3.456 28.189h8.815v-8.812h-8.815zM29.633 30.237h-10.86c-0.566 0-1.024-0.458-1.024-1.024v0-10.86c0-0.566 0.458-1.024 1.024-1.024v0h10.86c0.566 0 1.024 0.458 1.024 1.024v0 10.86c0 0.566-0.458 1.024-1.024 1.024v0zM19.798 28.189h8.812v-8.812h-8.812z" />
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
