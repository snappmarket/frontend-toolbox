/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const UploadIcon = ({ className, size }) => (
  <svg
    data-testid="UploadIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

UploadIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UploadIcon.defaultProps = {
  size: 1.5,
};

export default UploadIcon;
