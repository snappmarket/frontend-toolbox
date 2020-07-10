/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ScissorsIcon = ({ className, size }) => (
  <svg
    data-testid="ScissorsIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>
);

ScissorsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ScissorsIcon.defaultProps = {
  size: 1.5,
};

export default ScissorsIcon;
