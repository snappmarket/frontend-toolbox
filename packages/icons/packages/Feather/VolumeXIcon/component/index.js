/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const VolumeXIcon = ({ className, size }) => (
  <svg
    data-testid="VolumeXIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

VolumeXIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

VolumeXIcon.defaultProps = {
  size: 1.5,
};

export default VolumeXIcon;
