/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ArrowUpward = ({ className, size }) => (
  <svg
    data-testid="ArrowUpward"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
  </svg>
);

ArrowUpward.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ArrowUpward.defaultProps = {
  size: 1.5,
};

export default ArrowUpward;
