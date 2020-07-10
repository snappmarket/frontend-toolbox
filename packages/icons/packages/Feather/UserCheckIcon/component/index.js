/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const UserCheckIcon = ({ className, size }) => (
  <svg
    data-testid="UserCheckIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);

UserCheckIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UserCheckIcon.defaultProps = {
  size: 1.5,
};

export default UserCheckIcon;
