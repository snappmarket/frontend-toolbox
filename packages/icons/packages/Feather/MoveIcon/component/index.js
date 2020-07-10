/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MoveIcon = ({ className, size }) => (
  <svg
    data-testid="MoveIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="5 9 2 12 5 15"></polyline>
    <polyline points="9 5 12 2 15 5"></polyline>
    <polyline points="15 19 12 22 9 19"></polyline>
    <polyline points="19 9 22 12 19 15"></polyline>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="12" y1="2" x2="12" y2="22"></line>
  </svg>
);

MoveIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MoveIcon.defaultProps = {
  size: 1.5,
};

export default MoveIcon;
