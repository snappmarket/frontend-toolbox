/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const SquareIcon = ({ className, size }) => (
  <svg
    data-testid="SquareIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

SquareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SquareIcon.defaultProps = {
  size: 1.5,
};

export default SquareIcon;
