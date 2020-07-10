/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const BatteryFillIcon = ({ className, size }) => (
  <svg
    data-testid="BatteryFillIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g>
      <g>
        <rect width="24" height="24" opacity="0"></rect>
        <path d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"></path>
        <path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"></path>
      </g>
    </g>
  </svg>
);

BatteryFillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BatteryFillIcon.defaultProps = {
  size: 1.5,
};

export default BatteryFillIcon;
