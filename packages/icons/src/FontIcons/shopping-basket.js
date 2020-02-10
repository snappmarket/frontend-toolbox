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
    <title>shopping-basket</title>
    <path d="M8.971 25.326c1.515 0 2.743 1.228 2.743 2.743s-1.228 2.743-2.743 2.743v0c-1.515 0-2.743-1.228-2.743-2.743s1.228-2.743 2.743-2.743v0zM10.8 12.526h12.8v1.829h-12.8zM31.829 7.954l-3.657 10.971c-0.686 2.571-2.034 4.571-4.571 4.571h-13.714c-2.525 0-4.571-2.047-4.571-4.571v0l-0.914-10.057v-3.177l-4.4-3.829 1.063-1.291 5.177 4.64v2.743zM29.611 9.783h-23.371l0.914 9.143c0 1.515 1.228 2.743 2.743 2.743v0h13.714c1.509 0 2.354-1.177 2.743-2.743zM10.811 16.183h11.886v1.829h-11.886zM23.611 25.326c1.515 0 2.743 1.228 2.743 2.743s-1.228 2.743-2.743 2.743v0c-1.515 0-2.743-1.228-2.743-2.743s1.228-2.743 2.743-2.743v0zM22.697 28.983h1.829v-1.829h-1.829z" />
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
