/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ClockIcon = ({ className, size }) => (
  <svg
    data-testid="ClockIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fill="#000000"
      d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707-1.414 1.414z"
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
