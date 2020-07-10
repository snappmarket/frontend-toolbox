/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctEllipsis = ({ className, size }) => (
  <svg
    data-testid="OctEllipsis"
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
      d="M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z"
    ></path>
  </svg>
);

OctEllipsis.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctEllipsis.defaultProps = {
  size: 1.5,
};

export default OctEllipsis;
