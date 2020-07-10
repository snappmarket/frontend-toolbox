/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PhotoIcon = ({ className, size }) => (
  <svg
    data-testid="PhotoIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
  </svg>
);

PhotoIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PhotoIcon.defaultProps = {
  size: 1.5,
};

export default PhotoIcon;
