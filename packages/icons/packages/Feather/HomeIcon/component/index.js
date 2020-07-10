/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const HomeIcon = ({ className, size }) => (
  <svg
    data-testid="HomeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

HomeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HomeIcon.defaultProps = {
  size: 1.5,
};

export default HomeIcon;
