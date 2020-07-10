/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const SmileIcon = ({ className, size }) => (
  <svg
    data-testid="SmileIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

SmileIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SmileIcon.defaultProps = {
  size: 1.5,
};

export default SmileIcon;
