/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherImage = ({ className, size }) => (
  <svg
    data-testid="FeatherImage"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

FeatherImage.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherImage.defaultProps = {
  size: 1.5,
};

export default FeatherImage;
