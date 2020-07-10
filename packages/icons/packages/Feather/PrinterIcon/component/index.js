/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PrinterIcon = ({ className, size }) => (
  <svg
    data-testid="PrinterIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
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
