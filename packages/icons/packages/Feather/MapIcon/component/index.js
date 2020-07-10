/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ className, size }) => (
  <svg
    data-testid="MapIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

MapIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapIcon.defaultProps = {
  size: 1.5,
};

export default MapIcon;
