import * as React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size, color }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="32"
    viewBox="0 0 41 32"
    fill={color}
  >
    <title>check-mark</title>
    <path d="M10.397 30.886l-9.076-8.471c-0.748-0.749-1.21-1.784-1.21-2.926 0-2.288 1.855-4.142 4.142-4.142 1.042 0 1.995 0.385 2.723 1.021l-0.005-0.004 6.168 5.754 20.907-20.907c0.751-0.754 1.789-1.22 2.937-1.22 2.289 0 4.145 1.856 4.145 4.145 0 1.141-0.461 2.175-1.208 2.925l-23.442 23.446c-0.083 0.083-0.166 0.153-0.253 0.236-0.755 0.783-1.812 1.269-2.983 1.269-1.099 0-2.097-0.428-2.839-1.126l0.002 0.002z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

IconName.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default IconName;
