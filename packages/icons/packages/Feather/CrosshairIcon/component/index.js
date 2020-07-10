/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CrosshairIcon = ({ className, size }) => (
  <svg
    data-testid="CrosshairIcon"
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
    <line x1="22" y1="12" x2="18" y2="12"></line>
    <line x1="6" y1="12" x2="2" y2="12"></line>
    <line x1="12" y1="6" x2="12" y2="2"></line>
    <line x1="12" y1="22" x2="12" y2="18"></line>
  </svg>
);

CrosshairIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CrosshairIcon.defaultProps = {
  size: 1.5,
};

export default CrosshairIcon;
