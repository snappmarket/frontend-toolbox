/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CropIcon = ({ className, size }) => (
  <svg
    data-testid="CropIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M16 6h-16v2h16v16h2v-16c0-1.103-0.897-2-2-2z"></path>
    <path d="M6 0h1v5h-1v-5z"></path>
    <path d="M7 9h-1v8.5c0 0.275 0.225 0.5 0.5 0.5h8.5v-1h-8v-8z"></path>
    <path d="M19 17h5v1h-5v-1z"></path>
  </svg>
);

CropIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CropIcon.defaultProps = {
  size: 1.5,
};

export default CropIcon;
