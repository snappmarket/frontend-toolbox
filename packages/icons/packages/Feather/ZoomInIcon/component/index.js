/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ZoomInIcon = ({ className, size }) => (
  <svg
    data-testid="ZoomInIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

ZoomInIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ZoomInIcon.defaultProps = {
  size: 1.5,
};

export default ZoomInIcon;
