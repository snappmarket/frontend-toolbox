/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctFile = ({ className, size }) => (
  <svg
    data-testid="OctFile"
    viewBox="0 0 12 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"
    ></path>
  </svg>
);

OctFile.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctFile.defaultProps = {
  size: 1.5,
};

export default OctFile;
