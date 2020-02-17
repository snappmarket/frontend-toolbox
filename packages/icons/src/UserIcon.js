import React from 'react';
import PropTypes from 'prop-types';

const UserIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
  >
    <g id="user" transform="translate(-.001)">
      <g>
        <path d="M13.657 10.343a7.969 7.969 0 0 0-3.04-1.907 4.625 4.625 0 1 0-5.234 0A8.013 8.013 0 0 0 0 16h1.25a6.75 6.75 0 1 1 13.5 0H16a7.948 7.948 0 0 0-2.343-5.657zM8 8a3.375 3.375 0 1 1 3.375-3.375A3.379 3.379 0 0 1 8 8z" />
      </g>
    </g>
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
