/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherCircle = ({ className, size }) => (
  <svg
    data-testid="FeatherCircle"
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
  </svg>
);

FeatherCircle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherCircle.defaultProps = {
  size: 1.5,
};

export default FeatherCircle;
