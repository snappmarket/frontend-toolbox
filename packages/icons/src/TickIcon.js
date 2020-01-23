import React from 'react';
import PropTypes from 'prop-types';

const TickIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="65"
    viewBox="0 0 84.539 70.711"
    className={className}
  >
    <g transform="translate(-918.322 -182.139)">
      <rect
        width="32"
        height="14"
        rx="7"
        transform="translate(928.222 219.322) rotate(45)"
        fill="#fff"
      />
      <rect
        width="86"
        height="14"
        rx="7"
        transform="translate(1002.862 192.038) rotate(135)"
        fill="#fff"
      />
    </g>
  </svg>
);

TickIcon.propTypes = {
  className: PropTypes.string,
};

export default TickIcon;
