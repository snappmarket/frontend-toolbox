/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PrinterIcon = ({ className, size }) => (
  <svg
    data-testid="PrinterIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fill="#000000" d="M4 1h8v2h-8v-2z"></path>
    <path
      fill="#000000"
      d="M15 4h-14c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h3v4h8v-4h3c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM2 7c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM11 14h-6v-5h6v5z"
    ></path>
  </svg>
);

PrinterIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PrinterIcon.defaultProps = {
  size: 1.5,
};

export default PrinterIcon;
