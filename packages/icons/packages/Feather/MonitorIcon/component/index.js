/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MonitorIcon = ({ className, size }) => (
  <svg
    data-testid="MonitorIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

MonitorIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MonitorIcon.defaultProps = {
  size: 1.5,
};

export default MonitorIcon;
