/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const BarChartIcon = ({ className, size }) => (
  <svg
    data-testid="BarChartIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

BarChartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BarChartIcon.defaultProps = {
  size: 1.5,
};

export default BarChartIcon;
