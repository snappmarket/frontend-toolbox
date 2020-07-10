/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const HomeIcon = ({ className, size }) => (
  <svg
    data-testid="HomeIcon"
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
      fillRule="evenodd"
      d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"
    ></path>
  </svg>
);

HomeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HomeIcon.defaultProps = {
  size: 1.5,
};

export default HomeIcon;
