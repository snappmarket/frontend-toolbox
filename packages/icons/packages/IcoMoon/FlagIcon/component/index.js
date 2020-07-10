/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FlagIcon = ({ className, size }) => (
  <svg
    data-testid="FlagIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fill="#000000" d="M0 0h2v16h-2v-16z"></path>
    <path
      fill="#000000"
      d="M13 10.047c1.291 0 2.415-0.312 3-0.773v-8c-0.585 0.461-1.709 0.773-3 0.773s-2.415-0.312-3-0.773v8c0.585 0.461 1.709 0.773 3 0.773z"
    ></path>
    <path
      fill="#000000"
      d="M9.5 0.508c-0.733-0.312-1.805-0.508-3-0.508-1.506 0-2.818 0.312-3.5 0.773v8c0.682-0.461 1.994-0.773 3.5-0.773 1.195 0 2.267 0.197 3 0.508v-8z"
    ></path>
  </svg>
);

FlagIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FlagIcon.defaultProps = {
  size: 1.5,
};

export default FlagIcon;
