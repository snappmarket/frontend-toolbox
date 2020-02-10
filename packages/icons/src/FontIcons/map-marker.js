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
    <title>map-marker</title>
    <path d="M15.88 1.040c-6.552 0.026-11.853 5.344-11.853 11.9 0 2.781 0.954 5.339 2.553 7.365l-0.019-0.025 9.32 11.72 9.32-11.72c1.579-2.001 2.533-4.559 2.533-7.34 0-6.556-5.301-11.873-11.851-11.9h-0.003zM15.88 17.88c-2.817 0-5.1-2.283-5.1-5.1s2.283-5.1 5.1-5.1v0c2.817 0 5.1 2.283 5.1 5.1s-2.283 5.1-5.1 5.1v0z" />{' '}
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
