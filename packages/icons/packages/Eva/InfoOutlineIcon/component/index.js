/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const InfoOutlineIcon = ({ className, size }) => (
  <svg
    data-testid="InfoOutlineIcon"
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
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
        <circle cx="12" cy="8" r="1"></circle>
        <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"></path>
      </g>
    </g>
  </svg>
);

InfoOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

InfoOutlineIcon.defaultProps = {
  size: 1.5,
};

export default InfoOutlineIcon;
