/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const BatteryChargingIcon = ({ className, size }) => (
  <svg
    data-testid="BatteryChargingIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
    <line x1="23" y1="13" x2="23" y2="11"></line>
    <polyline points="11 6 7 12 13 12 9 18"></polyline>
  </svg>
);

BatteryChargingIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BatteryChargingIcon.defaultProps = {
  size: 1.5,
};

export default BatteryChargingIcon;
