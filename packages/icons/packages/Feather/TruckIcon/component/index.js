/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const TruckIcon = ({ className, size }) => (
  <svg
    data-testid="TruckIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

TruckIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TruckIcon.defaultProps = {
  size: 1.5,
};

export default TruckIcon;
