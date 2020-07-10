/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const LayersIcon = ({ className, size }) => (
  <svg
    data-testid="LayersIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

LayersIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LayersIcon.defaultProps = {
  size: 1.5,
};

export default LayersIcon;
