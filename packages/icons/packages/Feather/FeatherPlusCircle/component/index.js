/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherPlusCircle = ({ className, size }) => (
  <svg
    data-testid="FeatherPlusCircle"
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
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

FeatherPlusCircle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherPlusCircle.defaultProps = {
  size: 1.5,
};

export default FeatherPlusCircle;
