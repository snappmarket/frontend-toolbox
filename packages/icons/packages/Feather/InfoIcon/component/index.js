/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const InfoIcon = ({ className, size }) => (
  <svg
    data-testid="InfoIcon"
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
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

InfoIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

InfoIcon.defaultProps = {
  size: 1.5,
};

export default InfoIcon;
