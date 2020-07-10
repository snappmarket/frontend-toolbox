/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FlagIcon = ({ className, size }) => (
  <svg
    data-testid="FlagIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" y1="22" x2="4" y2="15"></line>
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
