import React from 'react';
import PropTypes from 'prop-types';

const CrossIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.971 47.971"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <path d="M28.228 23.986L47.092 5.122c1.172-1.171 1.172-3.071 0-4.242-1.172-1.172-3.07-1.172-4.242 0L23.986 19.744 5.121.88C3.949-.292 2.051-.292.879.88c-1.172 1.171-1.172 3.071 0 4.242l18.865 18.864L.879 42.85c-1.172 1.171-1.172 3.071 0 4.242.586.585 1.354.878 2.121.878s1.535-.293 2.121-.879l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242L28.228 23.986z" />
  </svg>
);
CrossIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

CrossIcon.defaultProps = {
  size: 1.5,
  color: '#000000'
};

export default CrossIcon;
