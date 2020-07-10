/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ className, size }) => (
  <svg
    data-testid="EyeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

EyeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EyeIcon.defaultProps = {
  size: 1.5,
};

export default EyeIcon;
