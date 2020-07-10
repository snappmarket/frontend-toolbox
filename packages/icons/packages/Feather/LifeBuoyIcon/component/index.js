/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const LifeBuoyIcon = ({ className, size }) => (
  <svg
    data-testid="LifeBuoyIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </svg>
);

LifeBuoyIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LifeBuoyIcon.defaultProps = {
  size: 1.5,
};

export default LifeBuoyIcon;
