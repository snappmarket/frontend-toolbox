/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ExpandFillIcon = ({ className, size }) => (
  <svg
    data-testid="ExpandFillIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g>
      <g>
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        ></rect>
        <path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
        <path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"></path>
      </g>
    </g>
  </svg>
);

ExpandFillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ExpandFillIcon.defaultProps = {
  size: 1.5,
};

export default ExpandFillIcon;
