import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 489.418 489.418"
    enableBackground="new 0 0 489.418 489.418"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      <path
        fill="#fff"
        d="M244.709,389.496c18.736,0,34.332-14.355,35.91-33.026l24.359-290.927c1.418-16.873-4.303-33.553-15.756-46.011
		C277.783,7.09,261.629,0,244.709,0s-33.074,7.09-44.514,19.532C188.74,31.99,183.022,48.67,184.44,65.543l24.359,290.927
		C210.377,375.141,225.973,389.496,244.709,389.496z"
      />
      <path
        fill="#fff"
        d="M244.709,410.908c-21.684,0-39.256,17.571-39.256,39.256c0,21.683,17.572,39.254,39.256,39.254
		s39.256-17.571,39.256-39.254C283.965,428.479,266.393,410.908,244.709,410.908z"
      />
    </g>
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
