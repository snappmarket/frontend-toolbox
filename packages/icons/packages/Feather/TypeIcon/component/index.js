/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const TypeIcon = ({ className, size }) => (
  <svg
    data-testid="TypeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </svg>
);

TypeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TypeIcon.defaultProps = {
  size: 1.5,
};

export default TypeIcon;
