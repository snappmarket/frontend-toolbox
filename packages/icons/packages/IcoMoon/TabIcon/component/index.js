/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const TabIcon = ({ className, size }) => (
  <svg
    data-testid="TabIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fill="#000000" d="M15 0h1v8h-1v-8z"></path>
    <path fill="#000000" d="M0 8h1v8h-1v-8z"></path>
    <path fill="#000000" d="M5 11h11v2h-11v2.5l-3.5-3.5 3.5-3.5v2.5z"></path>
    <path fill="#000000" d="M11 5h-11v-2h11v-2.5l3.5 3.5-3.5 3.5z"></path>
  </svg>
);

TabIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TabIcon.defaultProps = {
  size: 1.5,
};

export default TabIcon;
