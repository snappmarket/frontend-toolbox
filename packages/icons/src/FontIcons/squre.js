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
    <title>squre</title>
    <path d="M28.006 32h-24.003c-2.209 0-4-1.791-4-4v0-24.003c0-2.209 1.791-4 4-4v0h24.003c2.209 0 4 1.791 4 4v0 24.003c0 2.209-1.791 4-4 4v0zM4.003 1.996c-1.105 0-2 0.896-2 2v0 24.003c0 1.105 0.896 2 2 2v0h24.003c1.105 0 2-0.896 2-2v0-24.003c0-1.105-0.896-2-2-2v0z" />
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
