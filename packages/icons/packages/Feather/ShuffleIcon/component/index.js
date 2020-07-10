/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ShuffleIcon = ({ className, size }) => (
  <svg
    data-testid="ShuffleIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
);

ShuffleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShuffleIcon.defaultProps = {
  size: 1.5,
};

export default ShuffleIcon;
