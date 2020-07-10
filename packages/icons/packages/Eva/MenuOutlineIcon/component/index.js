/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MenuOutlineIcon = ({ className, size }) => (
  <svg
    data-testid="MenuOutlineIcon"
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
        <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect>
        <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect>
        <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect>
      </g>
    </g>
  </svg>
);

MenuOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MenuOutlineIcon.defaultProps = {
  size: 1.5,
};

export default MenuOutlineIcon;
