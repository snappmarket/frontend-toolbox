/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ClockFillIcon = ({ className, size }) => (
  <svg
    data-testid="ClockFillIcon"
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
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"></path>
      </g>
    </g>
  </svg>
);

ClockFillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClockFillIcon.defaultProps = {
  size: 1.5,
};

export default ClockFillIcon;
