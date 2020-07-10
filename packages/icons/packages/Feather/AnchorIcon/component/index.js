/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const AnchorIcon = ({ className, size }) => (
  <svg
    data-testid="AnchorIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" y1="22" x2="12" y2="8"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>
);

AnchorIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AnchorIcon.defaultProps = {
  size: 1.5,
};

export default AnchorIcon;
