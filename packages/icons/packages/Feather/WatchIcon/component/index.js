/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const WatchIcon = ({ className, size }) => (
  <svg
    data-testid="WatchIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="7"></circle>
    <polyline points="12 9 12 12 13.5 13.5"></polyline>
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
  </svg>
);

WatchIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

WatchIcon.defaultProps = {
  size: 1.5,
};

export default WatchIcon;
