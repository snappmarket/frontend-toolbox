/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ClockIcon = ({ className, size }) => (
  <svg
    data-testid="ClockIcon"
    viewBox="0 0 14 16"
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
      d="M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"
    ></path>
  </svg>
);

ClockIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClockIcon.defaultProps = {
  size: 1.5,
};

export default ClockIcon;
