/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const HelpCircleIcon = ({ className, size }) => (
  <svg
    data-testid="HelpCircleIcon"
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
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

HelpCircleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HelpCircleIcon.defaultProps = {
  size: 1.5,
};

export default HelpCircleIcon;
