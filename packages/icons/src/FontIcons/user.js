import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <title>user</title>
    <path d="M15.493 17.093c4.267 0 7.707-3.627 7.707-8.093 0.001-0.052 0.002-0.114 0.002-0.175 0-4.294-3.429-7.788-7.699-7.891l-0.010-0c-4.281 0.111-7.708 3.607-7.708 7.904 0 0.057 0.001 0.114 0.002 0.171l-0-0.008c0 4.44 3.453 8.093 7.707 8.093zM2.16 29.733h26.773c0.56 0 1.013-0.48 1.013-1.067 0-5.6-4.333-10.16-9.667-10.16h-9.467c-5.32 0-9.667 4.533-9.667 10.16 0 0.587 0.453 1.067 1.013 1.067z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
