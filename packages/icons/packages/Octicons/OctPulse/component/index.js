/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctPulse = ({ className, size }) => (
  <svg
    data-testid="OctPulse"
    viewBox="0 0 14 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z"
    ></path>
  </svg>
);

OctPulse.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctPulse.defaultProps = {
  size: 1.5,
};

export default OctPulse;
