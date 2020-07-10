/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DatabaseIcon = ({ className, size }) => (
  <svg
    data-testid="DatabaseIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

DatabaseIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DatabaseIcon.defaultProps = {
  size: 1.5,
};

export default DatabaseIcon;
