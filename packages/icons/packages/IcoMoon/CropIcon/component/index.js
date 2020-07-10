/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CropIcon = ({ className, size }) => (
  <svg
    data-testid="CropIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fill="#000000"
      d="M13 4l3-3-1-1-3 3h-7v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7zM5 5h5l-5 5v-5zM6 11l5-5v5h-5z"
    ></path>
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
