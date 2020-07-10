/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FlipFillIcon = ({ className, size }) => (
  <svg
    data-testid="FlipFillIcon"
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
      <g data-name="flip-in">
        <rect
          width="24"
          height="24"
          transform="rotate(-90 12 12)"
          opacity="0"
        ></rect>
        <path d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z"></path>
        <path d="M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z"></path>
      </g>
    </g>
  </svg>
);

FlipFillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FlipFillIcon.defaultProps = {
  size: 1.5,
};

export default FlipFillIcon;
