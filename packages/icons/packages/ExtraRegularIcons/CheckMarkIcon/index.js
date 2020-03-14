import * as React from 'react';
import PropTypes from 'prop-types';

const CheckMarkIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="65"
    viewBox="0 0 84.539 70.711"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <g transform="translate(-918.322 -182.139)">
      <rect
        width="32"
        height="14"
        rx="7"
        transform="translate(928.222 219.322) rotate(45)"
      />
      <rect
        width="86"
        height="14"
        rx="7"
        transform="translate(1002.862 192.038) rotate(135)"
      />
    </g>
  </svg>
);

CheckMarkIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

CheckMarkIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default CheckMarkIcon;
