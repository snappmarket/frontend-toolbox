/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const XOctagonIcon = ({ className, size }) => (
  <svg
    data-testid="XOctagonIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

XOctagonIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

XOctagonIcon.defaultProps = {
  size: 1.5,
};

export default XOctagonIcon;
