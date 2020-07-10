/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DisplayIcon = ({ className, size }) => (
  <svg
    data-testid="DisplayIcon"
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
      d="M0 1v10h16v-10h-16zM15 10h-14v-8h14v8zM10.5 12h-5l-0.5 2-1 1h8l-1-1z"
    ></path>
  </svg>
);

DisplayIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DisplayIcon.defaultProps = {
  size: 1.5,
};

export default DisplayIcon;
