/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctPrimitiveDot = ({ className, size }) => (
  <svg
    data-testid="OctPrimitiveDot"
    viewBox="0 0 8 16"
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
      d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
    ></path>
  </svg>
);

OctPrimitiveDot.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctPrimitiveDot.defaultProps = {
  size: 1.5,
};

export default OctPrimitiveDot;
