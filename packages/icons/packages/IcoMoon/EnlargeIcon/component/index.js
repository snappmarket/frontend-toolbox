/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const EnlargeIcon = ({ className, size }) => (
  <svg
    data-testid="EnlargeIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path fill="#000000" d="M16 0h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z"></path>
    <path
      fill="#000000"
      d="M16 16v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z"
    ></path>
    <path fill="#000000" d="M0 16h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z"></path>
    <path fill="#000000" d="M0 0v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z"></path>
  </svg>
);

EnlargeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EnlargeIcon.defaultProps = {
  size: 1.5,
};

export default EnlargeIcon;
