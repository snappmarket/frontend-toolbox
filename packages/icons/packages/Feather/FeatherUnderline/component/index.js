/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherUnderline = ({ className, size }) => (
  <svg
    data-testid="FeatherUnderline"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
    <line x1="4" y1="21" x2="20" y2="21"></line>
  </svg>
);

FeatherUnderline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherUnderline.defaultProps = {
  size: 1.5,
};

export default FeatherUnderline;
