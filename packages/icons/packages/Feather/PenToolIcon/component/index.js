/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PenToolIcon = ({ className, size }) => (
  <svg
    data-testid="PenToolIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

PenToolIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PenToolIcon.defaultProps = {
  size: 1.5,
};

export default PenToolIcon;
