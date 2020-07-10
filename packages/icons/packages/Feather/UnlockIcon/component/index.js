/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const UnlockIcon = ({ className, size }) => (
  <svg
    data-testid="UnlockIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>
);

UnlockIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UnlockIcon.defaultProps = {
  size: 1.5,
};

export default UnlockIcon;
