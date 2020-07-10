/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const GrabberIcon = ({ className, size }) => (
  <svg
    data-testid="GrabberIcon"
    viewBox="0 0 8 16"
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
      d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"
    ></path>
  </svg>
);

GrabberIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GrabberIcon.defaultProps = {
  size: 1.5,
};

export default GrabberIcon;
