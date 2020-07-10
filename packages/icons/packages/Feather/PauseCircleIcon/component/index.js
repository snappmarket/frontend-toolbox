/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PauseCircleIcon = ({ className, size }) => (
  <svg
    data-testid="PauseCircleIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="10" y1="15" x2="10" y2="9"></line>
    <line x1="14" y1="15" x2="14" y2="9"></line>
  </svg>
);

PauseCircleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PauseCircleIcon.defaultProps = {
  size: 1.5,
};

export default PauseCircleIcon;
