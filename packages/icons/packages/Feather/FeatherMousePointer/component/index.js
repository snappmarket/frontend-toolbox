/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherMousePointer = ({ className, size }) => (
  <svg
    data-testid="FeatherMousePointer"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="M13 13l6 6"></path>
  </svg>
);

FeatherMousePointer.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherMousePointer.defaultProps = {
  size: 1.5,
};

export default FeatherMousePointer;
