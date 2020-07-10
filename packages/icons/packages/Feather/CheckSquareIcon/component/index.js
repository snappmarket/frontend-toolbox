/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CheckSquareIcon = ({ className, size }) => (
  <svg
    data-testid="CheckSquareIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

CheckSquareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CheckSquareIcon.defaultProps = {
  size: 1.5,
};

export default CheckSquareIcon;
