/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctCheck = ({ className, size }) => (
  <svg
    data-testid="OctCheck"
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
      d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
    ></path>
  </svg>
);

OctCheck.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctCheck.defaultProps = {
  size: 1.5,
};

export default OctCheck;
