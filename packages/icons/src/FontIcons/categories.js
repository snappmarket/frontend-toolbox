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
    <title>categories</title>
    <path d="M11.345 0.087h-11.345v13.673h13.673v-13.673zM2.327 11.433h9.018v-9.018h-9.018zM28.8 0h-11.345v13.673h13.673v-13.673zM19.782 11.345h9.018v-9.018h-9.018zM11.345 17.542h-11.345v13.673h13.673v-13.673zM2.327 28.887h9.018v-9.018h-9.018zM28.8 17.455h-11.345v13.673h13.673v-13.673zM19.782 28.8h9.018v-9.018h-9.018z" />{' '}
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
