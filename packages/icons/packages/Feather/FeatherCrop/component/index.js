/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherCrop = ({ className, size }) => (
  <svg
    data-testid="FeatherCrop"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
    <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
  </svg>
);

FeatherCrop.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherCrop.defaultProps = {
  size: 1.5,
};

export default FeatherCrop;
