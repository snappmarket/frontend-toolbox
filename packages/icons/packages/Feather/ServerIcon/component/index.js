/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ServerIcon = ({ className, size }) => (
  <svg
    data-testid="ServerIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

ServerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ServerIcon.defaultProps = {
  size: 1.5,
};

export default ServerIcon;
