/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CoffeeIcon = ({ className, size }) => (
  <svg
    data-testid="CoffeeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

CoffeeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CoffeeIcon.defaultProps = {
  size: 1.5,
};

export default CoffeeIcon;
