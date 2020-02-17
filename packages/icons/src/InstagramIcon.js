import React from 'react';
import PropTypes from 'prop-types';

const InstagramIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.3"
    height="20.3"
    viewBox="0 0 20.3 20.3"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
  >
    <g
      fill="#4e4e4e"
      stroke="#4e4e4e"
      strokeWidth=".3px"
      transform="translate(.151 .15)"
    >
      <path d="M14.585 0H5.413A5.42 5.42 0 0 0 0 5.414v9.172A5.42 5.42 0 0 0 5.413 20h9.172A5.42 5.42 0 0 0 20 14.586V5.414A5.42 5.42 0 0 0 14.585 0zm4.241 14.586a4.246 4.246 0 0 1-4.241 4.241H5.413a4.246 4.246 0 0 1-4.241-4.241V5.414a4.246 4.246 0 0 1 4.241-4.242h9.172a4.246 4.246 0 0 1 4.241 4.241zm0 0" />
      <path
        d="M121.358 116a5.354 5.354 0 1 0 5.354 5.354 5.36 5.36 0 0 0-5.354-5.354zm0 9.56a4.206 4.206 0 1 1 4.206-4.206 4.211 4.211 0 0 1-4.206 4.21zm0 0"
        transform="translate(-111.359 -111.358)"
      />
      <path
        d="M359.634 66.285a1.657 1.657 0 1 0 1.657 1.657 1.659 1.659 0 0 0-1.657-1.657zm0 2.111a.455.455 0 1 1 .455-.455.455.455 0 0 1-.455.459zm0 0"
        transform="translate(-344.146 -63.631)"
      />
    </g>
  </svg>
);

InstagramIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

InstagramIcon.defaultProps = {
  size: 1.5,
};
export default InstagramIcon;
