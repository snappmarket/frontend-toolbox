/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherCompass = ({ className, size }) => (
  <svg
    data-testid="FeatherCompass"
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
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

FeatherCompass.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherCompass.defaultProps = {
  size: 1.5,
};

export default FeatherCompass;
