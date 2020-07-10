/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const UserIcon = ({ className, size }) => (
  <svg
    data-testid="UserIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

UserIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

UserIcon.defaultProps = {
  size: 1.5,
};

export default UserIcon;
