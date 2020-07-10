/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctPrimitiveSquare = ({ className, size }) => (
  <svg
    data-testid="OctPrimitiveSquare"
    viewBox="0 0 8 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fillRule="evenodd" d="M8 12H0V4h8v8z"></path>
  </svg>
);

OctPrimitiveSquare.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctPrimitiveSquare.defaultProps = {
  size: 1.5,
};

export default OctPrimitiveSquare;
