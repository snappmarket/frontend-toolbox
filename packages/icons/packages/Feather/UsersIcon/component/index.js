/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const UsersIcon = ({ className, size }) => (
  <svg
    data-testid="UsersIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

UsersIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UsersIcon.defaultProps = {
  size: 1.5,
};

export default UsersIcon;
