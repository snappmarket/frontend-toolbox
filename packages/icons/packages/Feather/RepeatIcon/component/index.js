/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const RepeatIcon = ({ className, size }) => (
  <svg
    data-testid="RepeatIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="17 1 21 5 17 9"></polyline>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
    <polyline points="7 23 3 19 7 15"></polyline>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
  </svg>
);

RepeatIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

RepeatIcon.defaultProps = {
  size: 1.5,
};

export default RepeatIcon;
