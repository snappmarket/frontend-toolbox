/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherBattery = ({ className, size }) => (
  <svg
    data-testid="FeatherBattery"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);

FeatherBattery.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherBattery.defaultProps = {
  size: 1.5,
};

export default FeatherBattery;
