/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const StopIcon = ({ className, size }) => (
  <svg
    data-testid="StopIcon"
    viewBox="0 0 14 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"
    ></path>
  </svg>
);

StopIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

StopIcon.defaultProps = {
  size: 1.5,
};

export default StopIcon;
