/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const LibraryIcon = ({ className, size }) => (
  <svg
    data-testid="LibraryIcon"
    viewBox="0 0 17 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fill="#000000"
      d="M16 15v-1h-1v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-1v1h-1v1h17v-1h-1z"
    ></path>
    <path fill="#000000" d="M8 0h1l8 5v1h-17v-1l8-5z"></path>
  </svg>
);

LibraryIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LibraryIcon.defaultProps = {
  size: 1.5,
};

export default LibraryIcon;
