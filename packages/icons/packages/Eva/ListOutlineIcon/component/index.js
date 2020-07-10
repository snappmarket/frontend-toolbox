/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ListOutlineIcon = ({ className, size }) => (
  <svg
    data-testid="ListOutlineIcon"
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
        <circle cx="4" cy="7" r="1"></circle>
        <circle cx="4" cy="12" r="1"></circle>
        <circle cx="4" cy="17" r="1"></circle>
        <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"></rect>
        <rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"></rect>
        <rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"></rect>
      </g>
    </g>
  </svg>
);

ListOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ListOutlineIcon.defaultProps = {
  size: 1.5,
};

export default ListOutlineIcon;
