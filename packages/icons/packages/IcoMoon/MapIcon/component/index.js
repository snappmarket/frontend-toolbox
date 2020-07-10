/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ className, size }) => (
  <svg
    data-testid="MapIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fill="#000000" d="M0 3l5-2v12l-5 2z"></path>
    <path fill="#000000" d="M6 0.5l5 3v11.5l-5-2.5z"></path>
    <path fill="#000000" d="M12 3.5l4-3v12l-4 3z"></path>
  </svg>
);

MapIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MapIcon.defaultProps = {
  size: 1.5,
};

export default MapIcon;
